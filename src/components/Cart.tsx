import {useState,useEffect} from "react";
import CartEmpty from "./CartEmpty";

// 추후 삭제 예정 fetch API
fetch("https://fakestoreapi.com/products")
.then((response) => {
    return response.json();
})
.then((data) => {
    localStorage.setItem(CART_ITEM, JSON.stringify(data));
    if(!localStorage.getItem(CART_ITEM)){
        localStorage.setItem(CART_ITEM, "[]")
    }
})

const CART_ITEM = "CART_ITEM";
const cartItemFromLocalStorage = JSON.parse(localStorage.getItem(CART_ITEM) || "[]");
type item = {
    id : number;
    title : string;
    price : number;
    image : string;
    count : number;
}

export default function Cart() {
    const [cart, setCart] = useState(cartItemFromLocalStorage);
    // 추후 item 개별 페이지에서 addToCartButton 클릭시 localstorage의 CART_ITEM 배열에 { id : n, count : 1 } 식으로 추가 예정
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        return () => {
            localStorage.setItem(CART_ITEM,JSON.stringify(cart));
        }
    });

    useEffect(() => {
        setTotal(calculateTotalPrice)
    },[])

    const removeFromCart = (id : number) => {
        const temp = cart.filter((item : item) => item.id !== id);
        setCart(temp);
    }
    
    const calculateTotalPrice = () : number => {
        let price = 0;
        cart.reduce((acc : number, cur : item) => {
            acc += cur.price;
            return price = acc;
        },0);
        return price;
    }

    return(
        <div className="cart">
            <div className="cartNavigation">
                <span> 홈 <span> &gt; </span> 장바구니 </span>
            </div>
            <div className="cartItems">
                {cart.length === 0 && <CartEmpty />}
                {cart.length !== 0 && cart.map((item : item, idx : number) => (
                    <div className="cartItem" key={idx}>
                        <img src={item.image} alt="" />
                        <div className="itemInfo">
                            <h2>{item.title}</h2>
                            <p>$ {(item.price * count).toFixed(2)}</p>
                            <button onClick={() => {
                                count === 1 ? removeFromCart(item.id) 
                                : setCount(count - 1)
                                setTotal(total - (item.price * count))
                            }}>-</button>
                            {count}
                            <button onClick={() => {
                                setCount(count + 1)
                                setTotal(total + (item.price * count))
                            }}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cartTotalPrice">
                    <label htmlFor="totalPrice">총 : ${total.toFixed(2)} </label>
                    <button id="totalPrice"> 구매하기 </button>
            </div>
        </div>
    )
}