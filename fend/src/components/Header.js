import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({setPage, setModalBox}) {
  
  return (
    <div className="Header">
      <h1>Магазин автозапчастей Auto-Parts</h1>
      <ul>
        <li onClick= { () => setPage ('Main') }>Главная</li>
        <li onClick= { () => setPage ('Basket') }>Корзина</li>
      </ul>
      <UserBox setModalBox={setModalBox} />
    </div>
  );
}

export default Header;
