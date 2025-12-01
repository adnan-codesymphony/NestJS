import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import FunctionalLifeCycle from './components/FunctionalLifeCycle'
import HideShow from './components/HideShow'
import LifeCycleExample from './components/LifeCycleExample'
import Profile from './components/Profile'
import TabbingSystem from './components/TabbingSystem'
import ToDoList from './components/ToDoList'
import Users from './components/Users'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Register from './components/Register_Login/Register'
import Login from './components/Register_Login/Login'
import Dashboard from './components/Register_Login/Dashboard'
import PasswordGenerator from './components/PasswordGenerator'
import Ecommerce from './components/E-commerce'

function App() {

  /* const users = [
    {
      name: "John",
      age:21 
    },
    {
      name: "Jane",
      age:22 
    },
    {
      name: "Joseph",
      age:23 
    },
    {
      name: "Emma",
      age:24 
    },
  ] */

  return (
    <>
      <div>
          {/* <h1 className='text-[40px] text-red-700 font-bold'>Welcome to React.js</h1> */}


          <BrowserRouter>

              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/about' element={<About />}/>
                  <Route path='/contact' element={<Contact />}/>
                  <Route path='/register' element={<Register />}/>
                  <Route path='/login' element={<Login />}/>
                  <Route path='/dashboard' element={<Dashboard />}/>
                  <Route path='/pass_gen' element={<PasswordGenerator />}/>
                  <Route path='/ecommerce' element={<Ecommerce />}/>
              </Routes>

          </BrowserRouter>
          

          {/* 
          
          <TabbingSystem />
          <ToDoList />
          <HideShow />
          <Users />
          <FunctionalLifeCycle />
          <LifeCycleExample />
          <ClassComponent />
          <FunctionalComponent />
          <Profile users={users} />
          
          */}
      </div>
    </>
  )
}

export default App
