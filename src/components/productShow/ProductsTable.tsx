import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
// import { filteritem } from '../actions';

export default function ProductsTable(props: any) {
  const { category, catego } = props;

  // const calledItems = useSelector((state:any) => state.itemList);
  // console.log(calledItems);
  // let itemList = calledItems.itemFilter.state;
  const itemList = [];

  function filtering(categ: string, categ1: string) {
    if (categ === 'fasion') {
      return itemList.filter(
        (item: any) =>
          item.category === "men's clothing" ||
          item.category === "women's clothing"
      );
    } else if (categ === 'accessory') {
      return itemList.filter((item: any) => item.category === 'jewelery');
    } else if (categ === 'digital') {
      return itemList.filter((item: any) => item.category === 'electronics');
    } else if (categ === 'main') {
      if (categ1 === 'fasion') {
        return itemList
          .filter(
            (item: any) =>
              item.category === "men's clothing" ||
              item.category === "women's clothing"
          )
          .slice(0, 4);
      } else if (categ1 === 'accessory') {
        return itemList
          .filter((item: any) => item.category === 'jewelery')
          .slice(0, 4);
      } else if (categ1 === 'digital') {
        return itemList
          .filter((item: any) => item.category === 'electronics')
          .slice(0, 4);
      } else return itemList;
    } else return itemList;
  }
  // const dispatch = useDispatch();
  // dispatch(filteritem(category));
  // console.log("sss"+filtering(category));
  // let array = calledItems;
  return (
    <div className="grid pb-20 md:grid-cols-2 lg:grid-cols-4">
      {filtering(category, catego).map((doc: any) => (
        <div key={doc.id} className="m-2 rounded-lg border dark:border-none">
          <Link to={`/${doc.id}`}>
            <figure className="flex h-80 items-center justify-center rounded-t-lg bg-white">
              <img src={doc.image} className="img-primary" alt={doc.title} />
            </figure>
            <div className="flex h-36 flex-col items-start justify-between overflow-auto bg-gray-200 p-4 text-black dark:rounded-b-lg dark:bg-gray-700 dark:text-gray-400">
              <span className="text-start font-semibold">{doc.title}</span>
              <span className="font-semibold">${doc.price}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
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
