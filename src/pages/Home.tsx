import React, { useEffect, useState } from 'react'
import { getProducts } from '~/apis/products'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Banner from '~/components/Banner'
import typeProduct from '~/interfaces/product'
const Home = () => {
  const [products, setProducts] = useState<typeProduct[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      setProducts(data)
    }
    fetchData()
  }, [])
  console.log(products)
  return (
    <div>
      <Header />
      <Banner />
      <h1>san pham </h1>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {products.map((product: typeProduct, index) => {
          return (
            <>
              <div className='col'>
                <div className='card'>
                  <img src={product.images} className='card-img-top' alt='...' style={{ width: '260px', height: '250px' }} />
                  <div className='card-body'>
                    <h5 className='card-title'>{product.name}</h5>
                    <p className='card-text'>
                      This is a longer card with supporting text below as a natural lead-in to additional content. This
                      content is a little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Home
