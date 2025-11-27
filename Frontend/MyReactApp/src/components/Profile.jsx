import React from 'react'

function Profile({users}) {
  return (
    <div>
        {
            users.map((item, index) => (
                <h2 key={index}>
                    Name ={item.name}<br></br>
                    Age ={item.age}
                </h2>
            ))
        }
        
    </div>
  )
}

export default Profile