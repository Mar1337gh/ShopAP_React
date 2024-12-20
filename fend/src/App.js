import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import Basket from './views/Basket';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {

const[page, setPage] = useState('Main')
const[modalBox, setModalBox] = useState('none')
const[basket, setBasket] = useState([]);

const addToBasket = (product) => {
  setBasket((prevBasket) => {
    // Проверяем, есть ли уже товар в корзине
    const existingProduct = prevBasket.find(item => item._id === product._id);
    if (existingProduct) {
      return prevBasket.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};
const removeFromBasket = (productId) => {
  setBasket(basket.filter(item => item._id !== productId));
};

const pages = {
  Main: <Main addToBasket={addToBasket}/>,
  Basket: <Basket cart={basket} removeFromBasket={removeFromBasket} />
}
const ModalBoxes = {
  None: null,
  Login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
  Registration: <ModalBox setModalBox={setModalBox}><Registration /></ModalBox>
}
  return (
    <div className="App">
     <Header setPage = {setPage} setModalBox={setModalBox}/>
      {pages[page]} 
      {ModalBoxes[modalBox]}
     <Footer />
    </div>
  );
}


export default App;
