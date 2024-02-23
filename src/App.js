import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ROUTER from './router/index.router';
import { useEffect, useState } from 'react';
import MainContext from './context/context';
import { Toaster } from 'react-hot-toast';
const router = createBrowserRouter(ROUTER)

function App() {
  const [data, setData] = useState([])
  const [shop, setShop] = useState([])
  const [news, setNews] = useState([])




  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const datas = {
    data, setData,open,setOpen,handleClose,handleOpen

  }
  return (
    <MainContext.Provider value={datas}>
      <div className="App">
        <RouterProvider router={router} />
        <Toaster position='top-left' />
      </div>
    </MainContext.Provider>
  );
}

export default App;
