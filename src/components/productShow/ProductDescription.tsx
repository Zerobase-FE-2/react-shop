import { useParams } from 'react-router';
import tw from 'tailwind-styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BreadCrumb from '../navigation/BreadCrumb';

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

  const Product = tw.div`
  flex flex-col lg:flex-row px-10 mt-16
  `

  return (
    <>
      {/* <div>ProductDescription{params.docId}</div> */}
      {/* <div>{location} {" > "} {itemList[Number(params.docId) - 1].title}</div> */}
      <div className='m-4'><BreadCrumb category={selectedItem.category} title={selectedItem.title} /></div>
      {/* {itemList.filter((item:any) => item.id === Number(params.docId)).map((doc:any) => ( */}
        <Product key={params.docId}>
            <figure className='w-full lg:w-96 bg-white p-4 mb-4 lg:mb-0 rounded-2xl'>
              <img src={selectedItem.image} className="img-primary w-full h-72" alt={selectedItem.title} />
            </figure>
            <div className='w-full lg:px-8 flex flex-col justify-between'>
              <h1 className='text-2xl font-bold'>
                {selectedItem.title}
              </h1>
              <p className='py-4 lg:py-0'>
                {selectedItem.description}
              </p>
              <div>
                {selectedItem.rating.rate}/{selectedItem.rating.count}
              </div>
              <p className='text-xl font-semibold py-4 lg:py-0'>
                ${selectedItem.price}
              </p>
              <div>
                <button className='btn-primary mr-4' onClick={() => dispatch({type : "ADD", payload : {id : selectedItem.id, count : 1}})}>장바구니에 담기</button>
                <button className='btn-primary bg-inherit border-solid border-2 border-gray-100 hover:bg-gray-500 hover:border-gray-500'><Link to='/cart'>장바구니로 이동</Link></button>
              </div>
            </div>
        </Product>
       {/* ))} */}
    </>
  )
}