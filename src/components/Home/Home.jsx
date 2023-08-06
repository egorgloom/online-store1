import React from 'react'
import Products from '../Products/Products';
import Poster from './../Poster/Poster';
import Categories from '../Categories/Categories';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { filteredByPrice } from '../../features/categories/productsSlice';

export default function Home() {

  const {products: {list, filtered}, categories} = useSelector((state) => state );


  const dispatch = useDispatch();


    useEffect(()=> {
        if(!list.length) return;

        dispatch(filteredByPrice(100))
    }, [dispatch, list.length])


  return (
    <>
      <Poster />
      <Products products={list} title='Trending'/>
      <Categories categories={categories.list} title='Worth seeing'/>
      <Products products={filtered} title='Less than 100'/>
    </>
  )
}
