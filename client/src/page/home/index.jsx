import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import Product from '../../components/product'
import NewArr from '../../components/newArr'
import Header from '../../components/header'
function Home() {
    return (
        <>
            <Helmet>
                <title>
                    Home
                </title>
            </Helmet>

            <div>
                <Header></Header>
                <Product></Product>
                <NewArr></NewArr>
            </div>
        </>
    )
}

export default Home