import { useState } from "react";
import "./style.css";
import { NewTodoForm } from "./NewForm";

export default function App() {
  const [todos, set_todos] = useState([]);
 
  function addTodo(title){
    set_todos((crnt_todos) => {
      return [
        ...crnt_todos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    }) 
  }

  function ToggleTodo(id, completed){
    set_todos(crnt_todos => {
      return crnt_todos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo;
      })
    })
  }

  function DltTodo(id){
    set_todos(crnt_todos => {
      return crnt_todos.filter(todo => todo.id !== id)
    })
  }

  console.log(todos);

  return (
    <>
      
      <NewTodoForm onSubmit={addTodo}/>

      <h1 className="header">ToDo list</h1>
      <ul className="list">
      {todos.length === 0 && "No todos"}
      {todos.map(todo => {
        return (
          <li>
          <label>
            <input type="checkbox" checked={todo.completed}
            onChange={e => ToggleTodo(todo.id, e.target.checked)}
            ></input>
            {todo.title}
          </label>
          <button onClick={() => DltTodo(todo.id)} 
          className="btn btn-danger">Delete</button>
        </li>
        )
      })}
      </ul>
    </>
  );
}