import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../utils/routes';
import Cart from '../Cart/Cart';


import Home from './../Home/Home';
import SingleProduct from './../Products/SingleProduct';

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
        <Route path={ROUTES.CART} element={<Cart/>} />
      </Routes>
    </>
  )
}
