import React, { useState } from 'react'

function HideShow() {

  const [passStatus, SetPassStatus] = useState(false);

  return (
    <div>
        <input type={passStatus? 'text': 'password'} className='border' />
        <button onClick={()=>SetPassStatus(!passStatus)}>
            {passStatus? 'Hide' : 'Show'}
        </button>
    </div>
  )
}

export default HideShow