import React, { useEffect, useState } from 'react'

function FunctionalLifeCycle() {

  const [count, setCount] = useState(0);
  const flag = true;


  useEffect(()=>{
    console.log("Component has been rendered or updated"); 
    
    return ()=>{
        console.log("Cleaning up...");
    }
  },[count]);
   
  return (
    <div>
        <h2>{flag?'Functional Component':'Hello World'}</h2>
        <p>Count: {count}</p> 
        <button style={{backgroundColor: count === 10 ? 'black': 'white', color: count === 10? 'white': 'black'}} onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default FunctionalLifeCycle