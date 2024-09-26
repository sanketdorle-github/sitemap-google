import React from 'react'
import { Helmet } from 'react-helmet-async'
const Shop = () => {
  return (
    <div>
         <Helmet>
            <meta name='description' content='ye hai Shop page .'/>
            <meta name="keywords" content="shop" />
            <title>Shop</title>
            <link rel="canonical" href="/shop" />
        </Helmet>
        <p>this is shop page i working on seo</p>
    </div>
  )
}

export default Shop