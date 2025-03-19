import React from "react";

function TodoNewTodo({ listHandler, itemHandler }) {
  return (
    <div>
      <input
        onChange={(e) => {
          itemHandler(e);
        }}
      ></input>
      <button onClick={listHandler}>Dodaj</button>
    </div>
  );
}

export default TodoNewTodo;
