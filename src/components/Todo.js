import React from 'react'

const Todo = (props) => {
    const todoClasses = ["bold"];
        if (props.todo.complete) {
        todoClasses.push("completed");
        }
    return (
    <div>
            <input style={{textDecoration:"line-through"}} onChange={(event) => {
            props.toggleComplete(props.i);
            }} type="checkbox" />
            <span className ={todoClasses.join(" ")}>{props.todo.text}</span>
            <button onClick = {(event) => {
            props.deleteHandler(props.i);
            }}>Delete</button>
            </div>
    )
} 

export default Todo