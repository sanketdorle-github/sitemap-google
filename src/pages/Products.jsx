import React from 'react'
import { Helmet } from 'react-helmet-async'

const Products = () => {
  return (
    <div>
         <Helmet>
            <meta name='description' content='ye hai  product page.'/>
            <meta name="keywords" content="product" />
            <title>Product</title>
            <link rel="canonical" href="/product" />
        </Helmet>
        <p>Products</p>
    </div>
  )
}

export default Products