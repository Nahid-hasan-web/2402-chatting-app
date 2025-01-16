import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './Components/Register/Register'
import app from './firebase.config'
import Login from './Components/Login/Login'
import LayoutOne from './Layouts/LayoutOne'
import Home from './Pages/Home'
import ResetPassword from './Components/ResetPassword/ResetPassword'
function App() {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/register' element ={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/resetPasswrod' element ={<ResetPassword />} />
      <Route path='/' element={<LayoutOne/>}>
        <Route index element ={<Home/>} />
      </Route> 
    </Route>
  ))

  return (
    <>

      <RouterProvider router={myRoute} />
    </>
  )
}

export default App
