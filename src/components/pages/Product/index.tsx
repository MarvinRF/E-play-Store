import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../Banner'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Banner />
    </>
  )
}

export default Product
