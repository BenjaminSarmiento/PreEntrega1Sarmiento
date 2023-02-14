
import './App.css'
import 'react-toastify/dist/ReactToastify.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from "./navbar/navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Contacto from './contacto/Contacto';
import Cart from './Cart/Cart';

import { DarkModeProvider } from '../context/DarkModeContext';


const App = () => {
  return (
    <>
    <BrowserRouter>
     <DarkModeProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/categorias/:nombreCategoria' element={<ItemListContainer/>}/>
          <Route path='contacto' element={<Contacto/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
        <ToastContainer/>
     </DarkModeProvider>
    </BrowserRouter>
    </>
  );
}

export default App;

