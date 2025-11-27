import React, { useEffect, useState } from 'react'

function Users() {

  const [data, setData] = useState(null)

  async function fetchAllUsers()
  {
        try
        {
            const response = await fetch("http://localhost:3000/user");
            const result = await response.json();
            if(!response.ok)
            {
                throw new Error("Something went wrong");
            }
            setData(result);
            console.log(result);
        }
        catch(error){
            console.log(error)
        }
  }

  useEffect(()=>{
    fetchAllUsers();
  },[]);

  return (
    <div>
      {  
        JSON.stringify(data)
      }
    </div>
  )
}

export default Users