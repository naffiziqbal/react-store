import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        { path: "/home", element: <Home /> },
      ]
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
