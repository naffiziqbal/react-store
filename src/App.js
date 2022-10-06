import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ProductDetails from './Components/Product/ProductDetails/ProductDetails';
import Main from './Layout/Main';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const addItemToCart = (product)=>{
      const newProduct = [...cart, product];
      setCart(newProduct);
  }
  
  useEffect( ()=> {
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => setData(products))
  },[]);
  



  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        { path: "/", element: <Home  data={data} addItemToCart={addItemToCart} /> },
        { path: "/home", element: <Home data={data} addItemToCart={addItemToCart}  /> },
        { path: "/cart", element: <Cart cart={cart}/> },
        {path: "/product/:productId",
        loader: async ({params})=> {
          return fetch (`https://fakestoreapi.com/products/${params.productId}`)
        },
         element: <ProductDetails />},
      ],
    },

    {
      path: "*", element: (
        <>    
          <Header />
          <div className='text-red-500 text-4xl font-extrabold  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  '> !404 Error </div>

        </>

      )
    },


  ])
  return (
    <div className="App">

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
