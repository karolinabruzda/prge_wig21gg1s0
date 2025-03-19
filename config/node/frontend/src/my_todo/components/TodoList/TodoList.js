import React from "react";
import Todoitem from "../TodoItem/Todoitem";

function TodoList({ listaZadan, listItemRemover }) {
  console.log(listaZadan);
  return (
    <div>
      <h2>Lista Zadań do zrobienia</h2>
      <ul>
        {listaZadan.map((zadanie, i) => {
          return (
            <Todoitem
              key={i}
              id={i}
              zadanie={zadanie}
              listItemRemover={listItemRemover}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
