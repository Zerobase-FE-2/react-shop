import Index from './Index';
import ProductsTable from './productShow/ProductsTable';
import tw from 'tailwind-styled-components'

export default function MainPage() {

  const Title = tw.h1`
  text-3xl font-bold p-6
  `

  return (
    <div>
      <div id="container" className='w-full'>
        <Index />
          <div className='text-center'>
              <Title>패션</Title>
              <div>
                <ProductsTable category="main" catego="fasion"/>
              </div>
            <br />
              <Title>악세서리</Title>
              <div>
                <ProductsTable category="main" catego="accessory"/>
              </div>
            <br />
              <Title>디지털</Title>
              <div>
                <ProductsTable category="main" catego="digital"/>
              </div>
            <br />
          </div>
      </div>
    </div>
  )
}