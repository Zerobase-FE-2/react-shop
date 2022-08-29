import ProductsTable from './ProductsTable'
import tw from 'tailwind-styled-components'
import BreadCrumb from '../navigation/BreadCrumb'

export default function AccessoryPage() {

  const Title = tw.h1`
  text-3xl font-bold p-6 text-center
  `

  return (
    <div>
      <div className='m-4'>
        <BreadCrumb />
      </div>
      <Title>악세서리</Title>
      <ProductsTable category={"accessory"}/>
    </div>
  )
}
