import React from 'react'
import { useState } from 'react'

function TodoForm({addTodo}) {
    const[value,setValue]=useState("")
    const handleSubmit = e =>{
        e.preventDefault();
       addTodo(value)
       setValue("")
    }
  return<>
  <form className='todo-form' onSubmit ={handleSubmit}>
<input type="text" className='todo-input' placeholder='enter the task' value={value}  onChange={(e)=>setValue(e.target.value)}></input>&nbsp;
<button type="submit" className='todo-btn'>Add task</button>
  </form>
  </>
}

export default TodoForm