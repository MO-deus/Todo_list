
import { useState } from "react";

export function NewTodoForm({onSubmit}) {
  const [new_item, set_new_item] = useState("");

  function HandleSubmit(e) {
    e.preventDefault()
    if (new_item === "") return
    onSubmit(new_item)

    set_new_item("")
  }

  return (
    <form onSubmit={HandleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item </label>
        <input
          value={new_item}
          onChange={(e) => set_new_item(e.target.value)}
          type="text"
          id="item"
        ></input>
      </div>
      <button className="btn"> Add item</button>
    </form>
  );
}
