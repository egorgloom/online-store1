import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './../Home/Home';


export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}
