import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import Navbar from './components/navbar';

import Homepage from './templates/Homepage';
import Qrcode from './templates/Qrcode';

const route  = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>
  },
  {
    path: '/qrcode',
    element: <Qrcode/>
  }
])

const AppRouter = () =>(
    <>
    <Navbar/>
    <RouterProvider router={route}/>
    </>
)

export default AppRouter