import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import Contacto from './components/contacto/Contacto';
import Checkout from './components/checkout/Checkout';
import Carrousel from './components/carrousel/Carrousel';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route exact path = '/' element={<Carrousel />} />
            <Route exact path = '/categoria/:categoria' element={<ItemListContainer />} />
            <Route exact path = '/plates/:id' element = {<ItemDetailContainer />} />
            <Route exact path = '/cart' element={<Cart />} />
            <Route exact path = '/contacto' element={<Contacto />} />
            <Route exact path = '/checkout' element={<Checkout />} />
          </Routes>

          <Footer />  
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
