import { Link } from "react-router-dom"

export default function CartEmpty() {
    return(
        <div>
            <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
            <Link to='/'><button className="btn-primary mt-10">담으러 가기</button></Link>
        </div>
    )
}