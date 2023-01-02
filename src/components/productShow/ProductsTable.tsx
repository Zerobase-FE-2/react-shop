import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/rtkHooks';
import { getAccesoryProducts } from '../../reducers/productSlice';

interface ProductsTable {
  category: string;
}

export default function ProductsTable({ category }: ProductsTable) {
  const products = useAppSelector(getAccesoryProducts);
  return (
    <div className="grid pb-20 md:grid-cols-2 lg:grid-cols-4">
      {products.map((prodcut: any) => (
        <div
          key={prodcut.id}
          className="m-2 rounded-lg border dark:border-none"
        >
          <Link to={`/${prodcut.id}`}>
            <figure className="flex h-80 items-center justify-center rounded-t-lg bg-white">
              <img
                src={prodcut.image}
                className="img-primary"
                alt={prodcut.title}
              />
            </figure>
            <div className="flex h-36 flex-col items-start justify-between overflow-auto bg-gray-200 p-4 text-black dark:rounded-b-lg dark:bg-gray-700 dark:text-gray-400">
              <span className="text-start font-semibold">{prodcut.title}</span>
              <span className="font-semibold">${prodcut.price}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
