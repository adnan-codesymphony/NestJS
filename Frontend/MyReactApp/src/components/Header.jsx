import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
       <nav>
            <ul className='text-[20px] flex gap-5  justify-center'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'} >About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/register'}>Register</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/pass_gen'}>PasswordGenerator</Link></li>
                <li><Link to={'/ecommerce'}>E-commerce</Link></li>
            </ul>
       </nav>
    </div>
  )
}

export default Header