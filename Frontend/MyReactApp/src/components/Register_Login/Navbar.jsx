import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
       <nav>
            <ul className='text-[20px] flex gap-[10px]  justify-center'>
                <li><Link to={'/register'}>Register</Link></li>
                <li><Link to={'/register'} >Login</Link></li>
                <li><Link to={'/register'}>Logout</Link></li>
            </ul>
       </nav>
    </div>
  )
}

export default Navbar