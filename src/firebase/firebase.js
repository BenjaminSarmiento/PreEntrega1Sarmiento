
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDM64LjHgY55jdAjBUp8Q_YVfqHTVoBsh8",
  authDomain: "sys-suplementos.firebaseapp.com",
  projectId: "sys-suplementos",
  storageBucket: "sys-suplementos.appspot.com",
  messagingSenderId: "344590851929",
  appId: "1:344590851929:web:66d6e25abca414ffe2b648"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const cargarBDD = async () => {
  const promise = await fetch("./json/productos.json")
  const productos = await promise.json()
  
  productos.forEach(async (prod) => {
    
    await addDoc(collection(db, "productos"), {
      nombre: prod.nombre,
      idCategoria: prod.idCategoria,
      nombreCategoria: prod.nombreCategoria,
      precio: prod.precio,
      cantidad: prod.cantidad,
      caracteristicas: prod.caracteristicas,
      stock: prod.stock,
      img: prod.img,
    })
  })
}

export const getProductos = async() => {
  const productos = await getDocs(collection(db,"productos"))
  const items = productos.docs.map(prod => {
      return {...prod.data(), id: prod.id}
  })
  return items
}

export const getProducto = async(id) => {     ///////////////
  const producto = await getDoc(doc(db, "productos", id))
  console.log(producto.data());
  const item = {...producto.data(), id: producto.id}
  console.log(item);
}