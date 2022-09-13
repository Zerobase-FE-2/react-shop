import {useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartEmpty from "./CartEmpty";
import PopUp from "./PopUp";
import tw from "tailwind-styled-components"

import BreadCrumb from './navigation/BreadCrumb'

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
    const calledItems = useSelector((state:any) => state.itemList);
    const docs = calledItems.state;
    const data : any = useSelector((state:any) => state.cart);
    const dispatch = useDispatch();

    const [cart, setCart] = useState(data);
    const [popUp, setPopUp] = useState(false);
  
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
    const Cart= tw.section`
    flex flex-col w-full min-h-screen bg-white dark:bg-gray-800 box-border p-4 lg:flex-row justify-between
    `
    const CartItems = tw.section`
    flex flex-col
    `;
    const CartItem = tw.article`
    flex flex-col lg:flex-row mt-4
    `;
    const ItemInfo = tw.div`
    flex flex-col justify-evenly pb-12 lg:px-12
    `

    return(
        <>
            <div className="p-4 bg-white dark:bg-gray-800">
                <BreadCrumb />
            </div>
            <Cart>
                <CartItems>
                    {cart.length === 0 && <CartEmpty />}
                    {cart.length !== 0 && docs.filter((items : item) => cart.map((item : item) => item.id).includes(items.id)).map((item : item) => (
                        <CartItem key={item.id}>
                            <Link to={`/${item.id}`}><img className="img-primary" src={item.image} alt={item.title} /></Link>
                            <ItemInfo>
                                <Link to={`/${item.id}`}><h2 className="text-xl text-black dark:text-gray-400 font-semibold hover:underline underline-offset-2">{item.title}</h2></Link>
                                <p className="text-3xl my-4 text-black dark:text-gray-400">$ {(item.price * cart.find((product : product) => product.id === item.id).count).toFixed(2)}</p>
                                <div>
                                    <button className="bg-violet-700 rounded-l-lg px-4 h-12 text-white font-semibold hover:bg-violet-800" onClick={() => {
                                        if(cart.find((product : product) => product.id === item.id).count === 1) {
                                            removeFromCart(item.id);
                                            dispatch({type: "REMOVE", payload : {id : item.id, count : item.count}})
                                        } else {
                                            dispatch({type: "REMOVE", payload : {id : item.id, count : item.count}})
                                        }
                                    }}>-</button>
                                    <span className="mx-4 text-black dark:text-gray-400">{cart.find((product : product) => product.id === item.id).count}</span>
                                    <button className="bg-violet-700 rounded-r-lg px-4 h-12 text-white font-semibold hover:bg-violet-800" onClick={() => {
                                        dispatch({type : "ADD", payload : {id : item.id, count : item.count}})
                                    }}>+</button>
                                </div>
                            </ItemInfo>
                        </CartItem>
                    ))}
                </CartItems>
                <div className="flex items-center mt-10 w-72 h-fit">
                        <label className="text-2xl lg:text-xl text-center text-black dark:text-gray-400" htmlFor="buyBtn">총 : ${Number(calculateTotalPrice().toFixed(2))} </label>
                        <button className="btn-primary ml-5" id="buyBtn" onClick={() => {
                            setPopUp(!popUp)

                        }}> 구매하기 </button>
                </div>
                {popUp && <PopUp state={popUp} func={setPopUp} />}
            </Cart>
        </>
    )
}