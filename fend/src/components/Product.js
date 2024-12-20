import React from 'react';
import './Product.css';

function Product({header, image, price}, {addToBasket}) {
  return (
    <div className="Product">
      <img src = {image} />
     <h1>{header}</h1>
     <p> {`${price} руб`} </p>
     <button onClick ={() => addToBasket()}>В корзину</button>
     </div>
  );
}

export default Product;