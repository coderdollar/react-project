import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'; 
import Widget from './components/cartwidget/CartWidget';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path = '/' element={<ItemListContainer />} />
        <Route exact path = '/cart' element={<Widget />} /> 
        <Route exact path = '/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route exact path = '/producto/:id' element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
