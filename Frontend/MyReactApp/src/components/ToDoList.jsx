import React, { useState } from 'react'

function ToDoListItems({val, key, indexNumber, todolist, setTodolist}){

    let [status, setStatus] = useState(false)

    let deleteRow = () => {
        
        let finalData = todolist.filter((v,i)=>i!=indexNumber)
        setTodolist(finalData)
    }

    let checkStatus = () => {
        setStatus(!status)
    }

    return (
        <li onClick={checkStatus} key={key} className={(status)? 'text-4xl mt-5 bg-yellow-300 text-red-700 line-through cursor-pointer' : 'text-4xl mt-5 cursor-pointer bg-black text-white'}>{indexNumber+1} {val} <span className='cursor-pointer' onClick={deleteRow}>&times;</span></li>
    )
}

function ToDoList() {

  let [todolist, setTodolist] = useState([])

  let saveToDoList = (event)=>{
    event.preventDefault();
    let todoname = event.target.todoname.value;

    if (!todolist.includes(todoname)) {
        let finalToDoList = [...todolist, todoname];
        console.log(finalToDoList);
        setTodolist(finalToDoList);
    }
    else{
        alert("ToDo Name Already Exists...")
    }
    
  }
  return (
    <div>
      <h1 className="text-[40px] font-bold">ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="todoname" className="border text-4xl mt-2" />
        <button className="text-4xl ml-2 cursor-pointer">Save</button>

        <ul>
          { todolist && todolist.length > 0 ?
            todolist.map((value, index) => {
              return <ToDoListItems val={value} key={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist} />
            })
            :
            ''
        }
        </ul>
      </form>
    </div>
  );
}

export default ToDoList


