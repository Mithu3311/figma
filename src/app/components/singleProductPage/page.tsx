import React from 'react'
import SingleProductBar from './singleProductBar'
import SingleProduct from './singleProduct'
import ProductDiscriptionPage from './productDiscription'
import RelatedProducts from './realatedProducts'

const SingleProductPage = () => {
  return (
    <>
      <SingleProductBar />
      <SingleProduct />
      <ProductDiscriptionPage />
      <RelatedProducts />
    </>
  )
}

export default SingleProductPage
