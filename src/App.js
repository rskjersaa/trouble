import React, {useState} from "react";
import './App.css';
import Todo from'./components/Todo';

function App() {

    const [newTodo, setNewTodo]= useState("");
    const [todos, setTodos]= useState([]);

  const onSubmitHandler = (event) => {
      event.preventDefault();

      if (newTodo.length === 0 ){
        return;
      }

  const todoItem = {
        text:newTodo,
        complete: false
      }
      setTodos([...todos, todoItem]);
      setNewTodo("");
    };
    const deleteHandler = (delIdx) => {
      const filteredTodos = todos.filter((todo,i)=> {
        return i !== delIdx;
      });

      setTodos (filteredTodos);

      }

    const toggleComplete = (idx) => {
        const updatedTodo = todos.map((todo, i) =>{
        if (idx===i) {
          todo.complete = !todo.complete;
        // const updatedTodo = { ...todo,complete: !todo.complete};
        }
          return todo;
    });
      setTodos(updatedTodo);
  }

    return (
    <div style={{ backgroundColor: "pink", textAlign:"center", height:"500px" }}>
      <h1>Todo List</h1>
      <form onSubmit= {onSubmitHandler}>
        <input onChange = {(event) => {
          setNewTodo (event.target.value)
        }}
          type="text"
          value={newTodo}
          />
        <div>
          <button >Add</button>
        </div>
      </form>

      {todos.map((todo,i) => {
        
        
        return <Todo todo={todo}  key ={i} toggleComplete={toggleComplete} i={i} deleteHandler={deleteHandler} />

        })
      }
    </div>
  );
}

export default App;
