import React from "react";

const Todo = ({ todo, RemoveTodo,CompleteTodo }) => {
  return (
    <div className="todo-list">
      <div className="todo">
        <div className="content">
          <p style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>{todo.text}</p>
          <p className="categoria">({todo.categoria})</p>
        </div>
        <div>
          <button className="complet" onClick={()=>CompleteTodo(todo.id)}>Completar</button>
          <button className="remove" onClick={()=> RemoveTodo(todo.id)}>x</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;

//rafce
