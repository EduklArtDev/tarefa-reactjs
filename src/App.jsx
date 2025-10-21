import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar um menu mobile nesse caraio",
      categoria: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Fazer academia",
      categoria: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar react",
      categoria: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter,setFilter] = useState("All")
  const [sort,setSort] = useState("Asc")

  const addTodo = (text, categoria) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        categoria,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const RemoveTodo = (id) => {
    const newTodos = [...todos];
    const filterTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filterTodos);
  };

  const CompleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>liasta de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      {todos
      .filter((todo)=> filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
        .filter((todo) =>
          todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a,b)=> sort === "Asc" ? a.text.localeCompare(b.text):b.text.localeCompare(a.text))
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            RemoveTodo={RemoveTodo}
            CompleteTodo={CompleteTodo}
          />
        ))}

      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
