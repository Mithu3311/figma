import React from 'react'
import Body from '@/app/components/homePage/body'
import Product from '@/app/components/homePage/product'
import ProductsCard from '@/app/components/homePage/productsCard'
import ProductsCard1 from '@/app/components/homePage/productsCard1'
import OurBlog from '@/app/components/homePage/ourBlog'
import Instagram from '@/app/components/homePage/instagram'

const HomePage = () => {
  return (
    <div>
      <Body />
      <Product />
      <ProductsCard />
      <ProductsCard1 />
      <OurBlog />
      <Instagram />
    </div>
  )
}

export default HomePage
