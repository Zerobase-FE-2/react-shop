import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const MenuDiv = tw.div`
w-screen h-screen flex flex-col justify-evenly items-center fixed -mt-2 -ml-2 bg-gray-100 dark:bg-gray-900 opacity-95
`;
const MenuSpan = tw.span`
text-2xl text-black dark:text-white
`
export default function Menu(props : any) {
    return(
        <MenuDiv onClick={() => {
            props.setMenu(!props.menu);
            props.setClicked(!props.clicked);
        }}>
            <Link to="/fasion"><MenuSpan onClick={() => {
                props.setMenu(!props.menu);
                props.setClicked(!props.clicked);
                }}>패션</MenuSpan></Link>
            <Link to="/accessory"><MenuSpan onClick={() => {
                props.setMenu(!props.menu);
                props.setClicked(!props.clicked);
                }}>악세서리</MenuSpan></Link>
            <Link to="/digital"><MenuSpan onClick={() => {
                props.setMenu(!props.menu);
                props.setClicked(!props.clicked);
                }}>디지털</MenuSpan></Link>
        </MenuDiv>
    )
}