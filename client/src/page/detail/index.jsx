import React, { useEffect, useState } from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useWish } from '../../context/wishContext'
import axios from 'axios'
function Detail() {
    const {id}=useParams()
     
    const {wish,setwish,handelwish}=useWish()

    ////
    const [product, setproduct] = useState([])
    const alldata = async () => {
        const res = await axios.get(`http://localhost:3000/${id}`)
        const data = res.data.data
        setproduct(data)
    }
    useEffect(() => {
        alldata()

    }, [])
    console.log(product._id);
    return (
        <>
            <Helmet>
                <title>
                    Detail
                </title>
            </Helmet>

            <div id='detail'>
            <div className="bigbox">
                    
                        <div  className="probox">
                            <div className="src">
                            <div onClick={()=>handelwish(product)} className="wish">
                                <i className="fa-solid fa-heart"></i>
                            </div>
                                <img src={product.src} alt="" />
                            </div>
                            <div className="basket">
                                <p>ADD TO BASKET</p>
                            </div>
                            <div className="name">
                                {product.name}
                            </div>
                            <div className="price">
                                $
                                {product.price}
                            </div>

                        </div>
                    
                </div>

            </div>
        </>
    )
}

export default Detail