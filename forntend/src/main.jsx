import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Profile from './components/Profile'
import Addmedicine from './components/Addmedicine'
import ListName from './components/ListName'
import UserContextProvider from './userContext/UserContextProvider'
import Logout from './components/Logout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <UserContextProvider>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/addmedicine' element={<Addmedicine/>}/>
      <Route path='/listname' element={<ListName/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Route>
    
   </Routes>
   </BrowserRouter>
   </UserContextProvider>
  </React.StrictMode>,
)
