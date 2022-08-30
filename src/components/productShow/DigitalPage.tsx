import ProductsTable from './ProductsTable'
import tw from 'tailwind-styled-components'
import BreadCrumb from '../navigation/BreadCrumb'

export default function DigitalPage() {

  const Title = tw.h1`
  text-3xl font-bold p-6 text-center text-black dark:text-white
  `

  return (
    <div className='h-fit lg:min-h-screen bg-white dark:bg-gray-800'>
      <div className='p-4'>
        <BreadCrumb />
      </div>
      <Title>디지털</Title>
      <ProductsTable category={"digital"}/>
    </div>
  )
}
