
import { useState } from "react";
import "./style.css";

export default function App() {
  const [new_item, set_new_item] = useState("");
  const [todos, set_todos] = useState([]);

  function HandleSubmit(e){
    e.preventDefault();

    set_todos(crnt_todos => {
      return [
        ...crnt_todos,
        { id:crypto.randomUUID(), title: new_item, completed: false }
      ]
    })

    set_new_item("");
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
      <form onSubmit={HandleSubmit}  className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item </label>
          <input
            value={new_item}
            onChange={e => set_new_item(e.target.value)}
            type="text"
            id="item"
          ></input>
        </div>
        <button className="btn"> Add item</button>
      </form>
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
