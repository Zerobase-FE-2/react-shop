import ProductsTable from './ProductsTable'
import tw from 'tailwind-styled-components'
import BreadCrumb from '../navigation/BreadCrumb'

export default function AccessoryPage() {

  const Title = tw.h1`
  text-3xl font-bold pb-6 text-center text-black dark:text-white
  `

  return (
    <div className='min-h-full bg-white dark:bg-gray-800'>
      <div className='p-4'>
        <BreadCrumb />
      </div>
      <Title>악세서리</Title>
      <ProductsTable category={"accessory"}/>
    </div>
  )
}
