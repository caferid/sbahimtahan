import React, { useState } from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { useWish } from '../../context/wishContext'
import { useBasket } from '../../context/basketContext'
function Navbar() {
    const [isopen, setisopen] = useState(true)

    const {wish,setwish,handelwish}=useWish()
    const { basket, setbasket, handelbasket,basketdelete,azalt,artir }=useBasket()
    return (
        <div id='navbar'>
            <div className="dev">
                <div className="title">
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
                </div>
                <div className="links">
                    <NavLink className={'nav'} to={'/'}>HOME</NavLink>
                    <NavLink className={'nav'} to={'/add'}>ADD</NavLink>
                    <NavLink className={'nav'} to={'/wish'}>WISh <span>{wish.length}</span></NavLink>
                    <Link className={'nav'} >about</Link>
                    <Link className={'nav'} >connact</Link>
                </div>
                <div className="icons">
                    <NavLink to={'/basket'}><i className="fa-solid fa-basket-shopping"></i><span>{basket.length}</span></NavLink>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-user"></i>

                </div>
            </div>
            <div className="mobile">
                <div className="title">
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
                </div>
                <div className={`links ${isopen?'':'open'}`}>
                    <NavLink onClick={()=>setisopen(!isopen)} className={'nav'} to={'/'}>HOME</NavLink>
                    <NavLink onClick={()=>setisopen(!isopen)} className={'nav'} to={'/add'}>ADD</NavLink>
                    <NavLink onClick={()=>setisopen(!isopen)} className={'nav'} to={'/wish'}>WISH</NavLink>
                    <NavLink onClick={()=>setisopen(!isopen)} className={'nav'} to={'/basket'}>BASKET</NavLink>
                    
                    <Link className={'nav'} >about</Link>
                    <Link className={'nav'} >connact</Link>
                </div>

                <div className="icons">
                    <i onClick={()=>setisopen(!isopen)} className={`fa-solid fa-${isopen?'bars':'x'}`}></i>
                    {/* <NavLink to={'/basket'}><i className="fa-solid fa-basket-shopping"></i></NavLink>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-user"></i> */}

                </div>
            </div>
        </div>
    )
}

export default Navbar