import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <ItemListContainer />
    </>
  )
}

export default App
