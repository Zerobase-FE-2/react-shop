import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import useSWR from 'swr';
import { filteritem } from '../actions';

export default function ProductsTable(props:any) {

  const {category} = props;
  // // const filteredItems = docs.filter((item:any) => item.category === "men's clothing" || item.category === "women's clothing");

  // async function fetcher(url:string){
  //   const result = await axios.get(url)
    
  //   // console.log(result.data);
  //   return result.data;
  // }
  // const {data: docs, error} = useSWR('post', () => fetcher('https://fakestoreapi.com/products'));

  // function filtering(categ:string){
  //   if(categ === "fasion"){
  //     return docs.filter((item:any) => item.category === "men's clothing" || item.category === "women's clothing");
  //   } else if (categ==="accessory"){
  //     return docs.filter((item:any) => item.category === "jewelery");
  //   } else if (categ==="digital"){
  //     return docs.filter((item:any) => item.category === "electronics");
  //   } else return docs;
  // }
  // const FILTER_ITEM = 'FILTER_ITEM';
  // // function filtersome(categ:string) {
  // //   return{
  // //     type: FILTER_ITEM,
  // //     categ: categ,
  // //   }
    
  // // }
  // // const docs:any = useSelector(state => state);
  // if(error) return <div>failed to load</div>;
  // if(!docs) return <div>Loading...</div>;

  const calledItems = useSelector((state:any) => state);
  // console.log(calledItems.itemFilter);
  let itemList = calledItems.itemFilter.state;

  function filtering(categ:string){
    if(categ === "fasion"){
      return itemList.filter((item:any) => item.category === "men's clothing" || item.category === "women's clothing");
    } else if (categ==="accessory"){
      return itemList.filter((item:any) => item.category === "jewelery");
    } else if (categ==="digital"){
      return itemList.filter((item:any) => item.category === "electronics");
    } else return itemList;
  }
  // const dispatch = useDispatch();
  // dispatch(filteritem(category));
  // console.log("sss"+filtering(category));
  // let array = calledItems;
  return (
    <div>
      {filtering(category).map((doc:any) => (
        <div key={doc.id} style={{display: "inline-block", margin:"10px", width:"300px", height:"500px", backgroundColor:"grey", border:"1px solid grey", borderRadius:"15px"}}>
          <Link to={`/${doc.id}`}>
            <div style={{display: "block", width:"300px", height:"300px", backgroundColor:"white", borderRadius:"14px 14px 0px 0px"}}>
              <img src={doc.image} className="logo" alt="itemimg" style={{margin:"75px", width:"150px", height:"150px"}} />
            </div>
            <div style={{display: "block", margin:"10px", width:"280px", height:"125px"}}>
            {doc.title}
            </div>
            <div style={{display: "block", width:"300px", height:"75px", borderRadius:"0px 0px 14px 14px"}}>
            ${doc.price}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
