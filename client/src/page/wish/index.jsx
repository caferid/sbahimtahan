import React, { useEffect, useState } from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { useWish } from '../../context/wishContext'
import axios from 'axios'
import { useBasket } from '../../context/basketContext'
function Wish() {
    const {wish,setwish,handelwish}=useWish()
    const {basket, setbasket, handelbasket,basketdelete,azalt,artir }=useBasket()

    ////
    // const [product, setproduct] = useState([])
    // const alldata = async () => {
    //     const res = await axios.get('http://localhost:3000')
    //     const data = res.data.data
    //     setproduct(data)
    // }
    // useEffect(() => {
    //     alldata()

    // }, [])
    return (
        <>
            <Helmet>
                <title>
                    Wish
                </title>
            </Helmet>

            <div id='wish'>
            <div className="bigbox">
                    {wish && wish.map((item) => (
                        <div key={item._id} className="probox">
                            <div className="src">
                            <div onClick={()=>handelwish(item)} className="wish">
                                <i className="fa-solid fa-heart"></i>
                            </div>
                                <img src={item.src} alt="" />
                            </div>
                            <div onClick={()=>handelbasket(item)}  className="basket">
                                <p>ADD TO BASKET</p>
                            </div>
                            <div className="name">
                                {item.name}
                            </div>
                            <div className="price">
                                $
                                {item.price}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Wish