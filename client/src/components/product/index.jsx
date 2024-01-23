import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'
import { useWish } from '../../context/wishContext'
import { Link } from 'react-router-dom'
import { useBasket } from '../../context/basketContext'
function Product() {
const {wish,setwish,handelwish}=useWish()
const { basket, setbasket, handelbasket,basketdelete,azalt,artir }=useBasket()

    ////
    const [product, setproduct] = useState([])
    const alldata = async () => {
        const res = await axios('http://localhost:3000')
        const data = res.data.data
        setproduct(data)
    }
    useEffect(() => {
        alldata()

    }, [])

    return (
        <div id='product'>
            <div className="dev">
                <div className="up">
                    <div className="manin_title">
                        <h2>Popular Items</h2>
                    </div>
                    <div className="info">
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
                <div className="bigbox">
                    {product && product.map((item) => (
                        <div key={item._id} className="probox">
                            <div className="src">
                            <div onClick={()=>handelwish(item)} className="wish">
                                <i className={`fa-${wish.find(x=>x._id===item._id)?'solid':'regular'} fa-heart`}></i>
                            </div>
                            <Link to={`/detail/${item._id}`}>
                                <img src={item.src} alt="" />
                            </Link>
                            </div>
                            <div onClick={()=>handelbasket(item)} className="basket">
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
                <div className="down">
                    <div className="redbut">
                        <p>VIEW MORE PRODUCTS</p>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className="up">
                    <div className="manin_title">
                        <h2>Popular Items</h2>
                    </div>
                    <div className="info">
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
                <div className="bigbox">
                    {product && product.map((item) => (
                        <div key={item._id} className="probox">
                            <div className="src">
                            <div onClick={()=>handelwish(item)} className="wish">
                                <i className={`fa-${wish.find(x=>x._id===item._id)?'solid':'regular'} fa-heart`}></i>
                            </div>
                            <Link to={`/detail/${item._id}`}>
                                <img src={item.src} alt="" />
                            </Link>
                            </div>
                            <div onClick={()=>handelbasket(item)} className="basket">
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
                <div className="down">
                    <div className="redbut">
                        <p>VIEW MORE PRODUCTS</p>
                    </div>
                </div>
            </div>
          

        </div>
    )
}

export default Product