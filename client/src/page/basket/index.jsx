import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { useBasket } from '../../context/basketContext'
import { useWish } from '../../context/wishContext'
function Basket() {
    const {wish,setwish,handelwish}=useWish()
    const { basket, setbasket, handelbasket,basketdelete,azalt,artir }=useBasket()
    return (
        <>
            <Helmet>
                <title>
                    Basket
                </title>
            </Helmet>

            <div id='basket'>
                <div className="bigbox">
                    {basket && basket.map((item) => (
                        <div key={item._id} className="probox">
                            <div className="src">
                                <div onClick={() => handelwish(item)} className="wish">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                                <img src={item.src} alt="" />
                            </div>
                            <div onClick={()=>basketdelete(item)} className="basket">
                                <p>delete basket</p>
                            </div>
                            <div className="name">
                                {item.name}
                            </div>
                            <div className="price">
                                $
                                {item.price}
                            </div>
                            <div className="conut">
                                <button onClick={()=>artir(item)}>+</button>
                                <p>{item.count}</p>
                                <button onClick={()=>azalt(item)}>-</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Basket