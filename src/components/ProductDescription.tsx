import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';
import useSWR from 'swr';
import styled from 'styled-components';

export default function ProductDescription() {
  const params = useParams();

  async function fetcher(url:string){
    const result = await axios.get(url)
    
    // console.log(result.data);
    return result.data;
  }
  const {data: docs, error} = useSWR('post', () => fetcher('https://fakestoreapi.com/products'));

  if(error) return <div>failed to load</div>;
  if(!docs) return <div>Loading...</div>;

  console.log(docs);

  return (
    <>
      {/* <div>ProductDescription{params.docId}</div> */}
      <div>디지털 {" > "} {docs[Number(params.docId) - 1].title}</div>
      {docs.filter((item:any) => item.id === Number(params.docId)).map((doc:any) => (
        <div key={params.docId} style={{display: "flex", margin:"10px", width:"1344px", height:"320px", backgroundColor:"grey"}}>
            
            <div style={{display: "inline-block", width:"300px", height:"300px", backgroundColor:"white"}}>
              <img src={doc.image} className="logo" alt="itemimg" style={{margin:"75px", width:"150px", height:"150px"}} />
            </div>

            <ItemDescriptionWrap>
              <ItemTitle>
                {doc.title}
              </ItemTitle>
              <ItemInfo>
                {doc.description}
              </ItemInfo>
              <ItemInfo>
                {doc.rating.rate}/{doc.rating.count}
              </ItemInfo>
              <ItemInfo>
                ${doc.price}
              </ItemInfo>
              <Shopbutton>장바구니에 담기</Shopbutton>
              <Shopbutton>장바구니로 이동</Shopbutton>
            </ItemDescriptionWrap>
        </div>
      ))}
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