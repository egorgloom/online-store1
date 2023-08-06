import React from 'react'
import Products from '../Products/Products';
import Poster from './../Poster/Poster';
import { useSelector } from 'react-redux';

export default function Home() {

  const {list} = useSelector(({products}) => products)


  return (
    <>
      <Poster />
      <Products products={list} title='Trending'/>
    </>
  )
}
