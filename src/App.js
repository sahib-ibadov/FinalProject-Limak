import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ROUTER from './router/index.router';
import { useEffect, useState } from 'react';
import MainContext from './context/context';
const router = createBrowserRouter(ROUTER)

function App() {
  const [data, setData] = useState([])
  const [shop, setShop] = useState([])
  const [news, setNews] = useState([])




  const datas = {
    data, setData

  }
  return (
    <MainContext.Provider value={datas}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </MainContext.Provider>
  );
}

export default App;
