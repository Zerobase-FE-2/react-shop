// import {useNavigate} from 'react-router-dom'

import { Link } from "react-router-dom"

export default function CartEmpty() {
    // const navigate = useNavigate()
    const onClickBtn = () => {
        // navigate(메인 페이지 이동)
        return alert(`업데이트 예정!`)
    }
    return(
        <div>
            <h1>장바구니에 물품이 없습니다.</h1>
            <button onClick={onClickBtn}>담으러 가기</button>
            <div>
                <Link to='/'>React Shop </Link>
            </div>
        </div>
    )
}