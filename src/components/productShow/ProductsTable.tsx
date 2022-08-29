import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components'
// import { filteritem } from '../actions';

export default function ProductsTable(props:any) {

  const {category, catego} = props;

  const calledItems = useSelector((state:any) => state.itemList);
  console.log(calledItems);
  // let itemList = calledItems.itemFilter.state;
  const itemList = calledItems.state;

  function filtering(categ:string, categ1:string){
    if(categ === "fasion"){
      return itemList.filter((item:any) => item.category === "men's clothing" || item.category === "women's clothing");
    } else if (categ==="accessory"){
      return itemList.filter((item:any) => item.category === "jewelery");
    } else if (categ==="digital"){
      return itemList.filter((item:any) => item.category === "electronics");
    } else if(categ === "main"){
      if(categ1 === "fasion"){
        return itemList.filter((item:any) => item.category === "men's clothing" || item.category === "women's clothing").slice(0,4);
      } else if (categ1==="accessory"){
        return itemList.filter((item:any) => item.category === "jewelery").slice(0,4);
      } else if (categ1==="digital"){
        return itemList.filter((item:any) => item.category === "electronics").slice(0,4);
      } else return itemList;
    }else return itemList;
    
  }
  // const dispatch = useDispatch();
  // dispatch(filteritem(category));
  // console.log("sss"+filtering(category));
  // let array = calledItems;
  return (
    <div className='flex flex-wrap justify-center'>
      {filtering(category, catego).map((doc:any) => (
        <div key={doc.id} className='w-full md:w-1/3 lg:w-1/5 m-2 shrink-0'>
          <Link to={`/${doc.id}`}>
            <figure className='h-80 bg-white flex justify-center items-center rounded-t-lg'>
              <img src={doc.image} className="img-primary" alt={doc.title}/>
            </figure>
            <div className='h-36 bg-gray-700 flex flex-col p-4 justify-between items-start rounded-b-lg'>
              <span className='text-start font-semibold'>{doc.title}</span>
              <span className='font-semibold'>${doc.price}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

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