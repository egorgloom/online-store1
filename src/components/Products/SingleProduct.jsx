import React from 'react'
import Product from './Product'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice';
import { useEffect } from 'react';
import { ROUTES } from './../../utils/routes';

export default function SingleProduct() {
  const {id} = useParams();
  const navigate = useNavigate();
  const {data, isFetching, isLoading, isSuccess} = useGetProductQuery({id});

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }

  }, [isLoading, isFetching, isSuccess, navigate]);
  return (
    <>
      <Product {...data}/>
    </>
  )
}
