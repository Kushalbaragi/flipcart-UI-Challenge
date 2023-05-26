import React from 'react'

function Card({product}) {
  return (
   <div className='card-wrapper'>
    <div className='img-wrapper'>
        <img src={product.images[0]} alt='product'/>
    </div>
    <p className='title'>{product.title}</p>
    <div className='rating-wrapper'>
        <p className='rating'>{product.rating}</p>
    </div>
    <div className='price-wrapper'>
        <strong className='bold price'>&#8377; {product.price}</strong>
        <strike className='origial price'>&#8377;{product.originalPrice}</strike>
        <span className='off price'>{product.discountPercentage} %OFF</span>
    </div>
   </div>
  )
}

export default Card