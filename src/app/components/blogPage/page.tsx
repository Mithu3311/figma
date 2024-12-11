import React from 'react'
import BlogPosts from './blogPosts'
import Header from './header'
import DeliveryPolicy from '../myAccountPage/deliveryPolicy'


const BlogPage = () => {
  return (
    <div>
      <Header/>
      <BlogPosts/>
      <DeliveryPolicy/>
    </div>
  )
}

export default BlogPage
