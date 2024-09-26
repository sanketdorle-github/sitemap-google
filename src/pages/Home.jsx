import React from 'react'

import { Helmet } from 'react-helmet-async'
const Home = () => {
  return (

    <div>
         <Helmet>
            <meta name='description' content=' ye hai Home page .'/>
            <meta name="keywords" content="home" />
            <title>Home</title>
            <link rel="canonical" href="/" />
        </Helmet>
        
        <p>Home</p>
        </div>
  )
}

export default Home