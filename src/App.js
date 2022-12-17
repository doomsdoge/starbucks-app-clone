import axios from 'axios';
import {useState} from 'react'
import Navbar from './components/navbar';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import {Routes, Route} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Menu from './pages/menu';
import Product from './pages/product';

function App() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')

  let onLogin = async (inputUsername, inputPassword) => {
    try {
        // validate empty input


        // check if password & username exist
        let response = await axios.get(`http://localhost:5000/users?username=${inputUsername}&password=${inputPassword}`)
        
        if(response.data.length === 0 ){
            throw {message: 'Account not found'}
        }
        
        // store id to Local Storage to keep user logged in
        localStorage.setItem('id', response.data[0].id)

        // only to trigger re-render
        setUsername(response.data[0].username)

        toast.success('Login success')
        setTimeout(() => {navigate('/')},2500)

    } catch (error) {
        toast.error(error.message)
    }
  }

  let keepLoggedIn = async () => {
    try {
      // check if local storage contain any id
      let getId = parseInt(localStorage.getItem('id'))

      // fetch username for the specific id
      let response = await axios.get(`http://localhost:5000/users/${getId}`)
      setUsername(response.data.username)

    } catch (error) {

    }
  }

  useEffect (() => {
    keepLoggedIn()
  },[])

  

  return (
    <div>
      <Navbar username={username}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={
            /* username?
              navigate('/')
            : */
              <Register />
          } 
        />
        <Route path='/login' element={
            /* username?
              navigate('/')
            : */
            <Login func={{onLogin}}/>
          } 
        />
        <Route path='/menu' element={<Menu />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
