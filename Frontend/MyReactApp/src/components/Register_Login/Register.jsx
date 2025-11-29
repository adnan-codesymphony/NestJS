import React, { useState } from 'react'
import Navbar from './Navbar'
import Header from '../Header'

function Register() {

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let handleRegister = (event)=>{
    event.preventDefault()

    console.log(`${fullname} , ${email} , ${password}`)

    registerUser()
  }

  async function registerUser()
  {
        const newUser = {
            fullname: fullname,
            email: email,
            password: password,
        }

        const response = await fetch('http://localhost:3000/auth/register',{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newUser)
        })

        const createdUser = await response.json()
        console.log("Registration Successfull",createdUser)
  }

  return (
    <div>
        <Header />
        <h2 className='text-[30px] mt-5'>Register</h2>
        <form onSubmit={handleRegister} className='text-[25px]'>
            <input type='text' value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder='Fullname' className='mt-5 border'/><br></br>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='mt-5 border'/><br></br>
            <input type='password'value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='mt-5 border'/><br></br>
            <button type='submit' className='mt-5 bg-amber-300 py-2 px-3 cursor-pointer'>Register</button>
        </form>
    </div>
  )
}

export default Register