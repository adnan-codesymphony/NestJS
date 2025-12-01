import React, { useState } from 'react'
import { LC, NC, SC, UC } from './PassChar'

function PasswordGenerator() {

    let [uppercase, setUppercase] = useState(false)
    let [lowercase, setLowercase] = useState(false)
    let [number, setNumber] = useState(false)
    let [symbols, setSymbols] = useState(false)
    let [passwordLen, setPasswordLen] = useState(10)
    let [fpass, setPass] = useState('')

    let createPassword = () => {
        let finalPass = ''
        let charSet = ''
        if(uppercase || lowercase || number || symbols)
        {
            if(uppercase) charSet += UC
            if(lowercase) charSet += LC
            if(number) charSet += NC
            if(symbols) charSet += SC

            for(let i=0; i<passwordLen; i++)
            {
                finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length))
            }
            setPass(finalPass)
        }
        else
        {
            alert("Please one CheckBox")
        }
    }

    let copyPass = () =>{
        navigator.clipboard.writeText(fpass)
    }
  return (
    <div>
        <h2 className='text-[30px] mt-5'>Password Generator</h2>

        <div className='mt-5 text-2xl '>
            <input type='text' value={fpass} readOnly className='border'/> 
            <button onClick={copyPass}>Copy</button><br></br><br></br>

            <label >Password Length</label>
            <input type='number' className='border' max={20} min={10} value={passwordLen} onChange={(event)=>setPasswordLen(event.target.value)}/><br></br><br></br>

            <label>Include uppercase letters</label>
            <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/><br></br><br></br>
 
            <label>Include lowercase letters</label>
            <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/><br></br><br></br>
            
            <label>Include numbers</label>
            <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/><br></br><br></br>
            
            <label>Include symbols</label>
            <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)}/><br></br><br></br>

            <button onClick={createPassword}>Generate Password</button>

        </div>


    </div>
  )
}

export default PasswordGenerator