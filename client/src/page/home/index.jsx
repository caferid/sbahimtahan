import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import Product from '../../components/product'
function Home() {
    return (
        <>
            <Helmet>
                <title>
                    Home
                </title>
            </Helmet>

            <div>
                <Product></Product>
            </div>
        </>
    )
}

export default Home