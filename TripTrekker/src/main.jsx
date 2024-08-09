import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import { Provider } from 'react-redux'
import Store from './Redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path="/login-user" element={<Login/>}></Route>
        <Route path='/signup-user' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
