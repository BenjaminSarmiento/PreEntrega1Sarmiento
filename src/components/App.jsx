
import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import { cargarBDD } from '../firebase/firebase';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from "./navbar/navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Contacto from './contacto/Contacto';
import { Cart } from './Cart/Cart';
import Checkout from './Checkout/Checkout';

import { DarkModeProvider } from '../context/DarkModeContext';

import { Carritoprovider } from '../context/CarritoContext';


const App = () => {

  //cargarBDD()

  return (
    <>
    <BrowserRouter>
    <Carritoprovider>
      <DarkModeProvider>
         <Navbar/>
         <Routes>
           <Route path='/' element={<ItemListContainer/>}/>
           <Route path='/item/:id' element={<ItemDetailContainer/>}/>
           <Route path='/categorias/:nombreCategoria' element={<ItemListContainer/>}/>
            <Route path='contacto' element={<Contacto/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
         </Routes>
         <ToastContainer/>
      </DarkModeProvider>
    </Carritoprovider>
    </BrowserRouter>
    </>
  );
}

export default App;

