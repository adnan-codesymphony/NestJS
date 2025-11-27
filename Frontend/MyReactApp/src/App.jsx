import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import FunctionalLifeCycle from './components/FunctionalLifeCycle'
import LifeCycleExample from './components/LifeCycleExample'
import Profile from './components/Profile'
import Users from './components/Users'

function App() {

  /* const users = [
    {
      name: "John",
      age:21 
    },
    {
      name: "Jane",
      age:22 
    },
    {
      name: "Joseph",
      age:23 
    },
    {
      name: "Emma",
      age:24 
    },
  ] */

  return (
    <>
      <div>
          <h1>Welcome to React.js</h1>

          <Users />      

          {/* 
          <FunctionalLifeCycle />
          <LifeCycleExample />
          <ClassComponent />
          <FunctionalComponent />
          <Profile users={users} />
           */}
      </div>
    </>
  )
}

export default App
