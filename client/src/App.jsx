import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.scss'
import Mainlayout from './layout/mainlayout';
import Home from './page/home';
import Add from './page/add';
import Wish from './page/wish';
import Basket from './page/basket';
import Detail from './page/detail';
import { WishProvider } from './context/wishContext';
import { BasketProvider } from './context/basketContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HelmetProvider>
            <BasketProvider>
          <WishProvider>


              <Routes>
                <Route element={<Mainlayout></Mainlayout>} path='/'>
                  <Route element={<Home></Home>} index></Route>
                  <Route element={<Add></Add>} path='/add'></Route>
                  <Route element={<Wish></Wish>} path='/wish'></Route>
                  <Route element={<Basket></Basket>} path='basket'></Route>
                  <Route element={<Detail></Detail>} path='/detail/:id'></Route>
                </Route>
              </Routes>
          </WishProvider>
            </BasketProvider>
        </HelmetProvider>
      </BrowserRouter>

    </>
  )
}

export default App
