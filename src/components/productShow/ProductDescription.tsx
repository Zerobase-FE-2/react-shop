import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function ProductDescription() {
  const params = useParams();
  const dispatch = useDispatch();
  // const {category} = props;
  const calledItems = useSelector((state:any) => state.itemList);

  let selectedItem = calledItems.state[Number(params.docId) - 1];
  let firstLocation = '';
  if(selectedItem.category === "men's clothing" || selectedItem.category === "women's clothing"){
    firstLocation = '패션';
  } else if (selectedItem.category === "jewelery"){
    firstLocation = '악세서리';    
  } else if (selectedItem.category === "electronics"){
    firstLocation = '디지털';
  } else 
     firstLocation = '메인';
  // if(category === "fasion"){
  //   location = '패션';
  // } else if (category==="accessory"){
  //   location = '악세서리';    
  // } else if (category==="digital"){
  //   location = '디지털';
  // } else 
  //    location = '메인';

  // async function fetcher(url:string){
  //   const result = await axios.get(url)
    
  //   // console.log(result.data);
  //   return result.data;
  // }
  // const {data: docs, error} = useSWR('post', () => fetcher('https://fakestoreapi.com/products'));

  // if(error) return <div>failed to load</div>;
  // if(!docs) return <div>Loading...</div>;

  // console.log(itemList);

  return (
    <>
      {/* <div>ProductDescription{params.docId}</div> */}
      {/* <div>{location} {" > "} {itemList[Number(params.docId) - 1].title}</div> */}
      <div>{firstLocation} {" > "} {selectedItem.title}</div>
      {/* {itemList.filter((item:any) => item.id === Number(params.docId)).map((doc:any) => ( */}
        <div key={params.docId} style={{display: "flex", margin:"10px", width:"1344px", height:"320px", backgroundColor:"grey"}}>
            
            <div style={{display: "inline-block", width:"300px", height:"300px", backgroundColor:"white"}}>
              <img src={selectedItem.image} className="logo" alt="itemimg" style={{margin:"75px", width:"150px", height:"150px"}} />
            </div>

            <ItemDescriptionWrap>
              <ItemTitle>
                {selectedItem.title}
              </ItemTitle>
              <ItemInfo>
                {selectedItem.description}
              </ItemInfo>
              <ItemInfo>
                {selectedItem.rating.rate}/{selectedItem.rating.count}
              </ItemInfo>
              <ItemInfo>
                ${selectedItem.price}
              </ItemInfo>
              <Shopbutton onClick={() => dispatch({type : "ADD", payload : {id : selectedItem.id, count : 1}})}>장바구니에 담기</Shopbutton>
              <Shopbutton><Link to='/cart'>장바구니로 이동</Link></Shopbutton>
            </ItemDescriptionWrap>
        </div>
       {/* ))} */}
    </>
  )


}

const ItemDescriptionWrap = styled.div`
  display: inline-block;
  margin: 10px;
  width: 950px;
`

const ItemTitle = styled.h3`
  display: block;
  margin: 10px;
  width: 950px;
`

const ItemInfo = styled.div`
  display: block;
  margin: 10px;
  width: 950px;
`

const Shopbutton = styled.button`
  display: inline-block;
  margin: 10px;
  width: 120px;
  height: 40px;
`