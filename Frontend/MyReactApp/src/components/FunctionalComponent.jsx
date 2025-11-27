import React, { useState } from 'react'

function FunctionalComponent() {

  const [count, setCount] = useState(0);

  return (
    <div>
        <h2>This is Functional Component</h2>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default FunctionalComponent