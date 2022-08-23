import {useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import CartEmpty from "./CartEmpty";

type item = {
    category : string;
    description : string;
    id : number;
    image : string;
    price : number;
    rating : number;
    title : string;
    count : number;
}

type product = {
    id : number;
    count : number;
}

export default function Cart() {
    //------------
    // async function fetcher(url:string) {
    //     const result = await axios.get(url)
    //     return result.data
    // }
    // const { data : docs } = useSWR('post', () => fetcher('https://fakestoreapi.com/products'))
    const calledItems = useSelector((state:any) => state.itemList);
    const docs = calledItems.state;
    //------------

    const data : any = useSelector((state:any) => state.cart);
    const dispatch = useDispatch()

    const [cart, setCart] = useState(data || []);
    const removeFromCart = (id : number) => {
        const temp = cart.filter((product : product) => product.id !== id);
        setCart(temp);
    }
    
    const calculateTotalPrice = () : number => {
        let total = 0;
        const arr = docs.filter((item : item) => cart.map((product : product) => product.id).includes(item.id));
        const arr2 = arr.map((item : item) => item.price * cart.find((product : product) => product.id === item.id).count);
        arr2.reduce((acc : number, cur : number) => {
            acc += cur;
            return total = acc;
        },0);
        return total;
    }

    return(
        <div className="cart">
            <div className="cartNavigation">
                <span> 홈 <span> &gt; </span> 장바구니 </span>
            </div>
            <div className="cartItems">
                {cart.length === 0 && <CartEmpty />}
                {cart.length !== 0 && docs.filter((items : item) => cart.map((item : item) => item.id).includes(items.id)).map((item : item) => (
                    <div className="cartItem" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="itemInfo">
                            <h2>{item.title}</h2>
                            <p>$ {(item.price * cart.find((product : product) => product.id === item.id).count).toFixed(2)}</p>
                            <button onClick={() => {
                                cart.find((product : product) => product.id === item.id).count === 1 ? removeFromCart(item.id) 
                                : dispatch({type: "REMOVE", payload : {id : item.id, count : item.count}})
                            }}>-</button>
                            {cart.find((product : product) => product.id === item.id).count}
                            <button onClick={() => {
                                dispatch({type : "ADD", payload : {id : item.id, count : item.count}})
                            }}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cartTotalPrice">
                    <label htmlFor="buyBtn">총 : ${Number(calculateTotalPrice().toFixed(2))} </label>
                    <button id="buyBtn"> 구매하기 </button>
            </div>
        </div>
    )
}