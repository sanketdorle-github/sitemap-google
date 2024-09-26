import React from 'react'
import { Helmet } from 'react-helmet-async'

const Login = () => {
  return (
    <div>
         <Helmet>
            <meta name='description' content='ye hai login page .'/>
            <meta name="keywords" content="login"/>
            <title>Login</title>
            <link rel="canonical" href="/login"/>
        </Helmet>
        <p>Login</p>
    </div>
  )
}

export default Login