import React ,{useState}from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
import EditTodo from './EditTodo';
uuidv4();

function TodoWrapper() {
    const[todos,setTodos]=useState([])
    const addTodo = todo => {
        setTodos([...todos,{
            id:uuidv4(),
            task:todo,
            completed:false,
            isediting:false}

     ])
    //  console.log(todos)
    }
    // console.log(todos)
// toggle//
const toggleComplete = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed }:todo
    ));
}
//delete//
const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
//edit function //

const editTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, isediting: !todo.isediting } : todo
    )
  );
}
// edit task
const editTask = (task,id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, task, isediting: !todo.isediting } : todo
    )
  );
};
  return<>
  <h1>To Do App</h1>
  <div className="todo-wrapper">
    <TodoForm  addTodo={addTodo} />
    {
    todos.map((todo,id) =>
        todo.isediting ? (
          <EditTodo editTodo={editTask} task={todo} />
        ) : (

      // todos.map((todo,index)=>(
        <Todo  
        key = {todo.id}
        task = {todo}
        toggleComplete={toggleComplete}
        deleteTodo ={deleteTodo} 
        editTodo={editTodo}
        />
      )
      
    )
    }
   
  </div>
  </>
}

export default TodoWrapper