import React from 'react';
import './Basket.css';

function Basket({ basket, removeFromBasket }) {
  return (
    <div className="Basket">
        <h1>Корзина</h1>
        {basket.length === 0 ? 
        (<p>Корзина пуста</p>): (
        <div>
          {basket.map((item) => (
            <div key={item._id} className="basket-item">
              <img src={item.image} alt={item.header} />
              <div>
                <h3>{item.header}</h3>
                <p>{item.price} ₽</p>
                <p>Количество: {item.quantity}</p>
                <button onClick={() => removeFromBasket(item._id)}>Удалить</button>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
          
      
export default Basket;