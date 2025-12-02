import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();

export default function Component1() {

    const [user] = useState("John")

  return (
    <div>
        <UserContext.Provider value={user}>
            <h1>Component 1</h1>
            <h1>Hello, {user}</h1>
            <Component2 />
        </UserContext.Provider>
    </div>
  )
}


function Component2() {

  return (
    <div>
       <h1>Component 2</h1>
       <Component3 />
    </div>
  )
}
 
function Component3() {

  const user = useContext(UserContext)

  return (
    <div>
       <h1>Component 3</h1>
       <h2>Hello, {user} again</h2>
    </div>
  )
}