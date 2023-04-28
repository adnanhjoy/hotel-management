import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './components/Home/Home'
import About from './components/About/About'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import PrivateRoutes from './routes/PrivateRoutes'
import SingleRoom from './components/SingleRoom/SingleRoom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      },
      {
        path: 'single-room',
        element: <PrivateRoutes><SingleRoom></SingleRoom></PrivateRoutes>
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
