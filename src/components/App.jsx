import './App.css'
import Navbar from "./navbar/navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;



