import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo.js"
import TodoForm from "./TodoForm"


function App() {

    const [todo,setTodo] = useState([
        {text: "hello",isComplete: true},
        {text: "hello",isComplete: false},
        {text: "hello",isComplete: false}
    ]);



    function addTodo(text){
      const isComplete = false;
      const temp = [...todo, {text,isComplete}]
      setTodo(temp)
    }

    function removeTodo(index){
      const temp = [...todo];
      temp.splice(index,1);
      setTodo(temp);
    }

    function completed(index){
      const temp = [...todo];
      temp.forEach((cur,count) => {
        if(count == index){
          temp[index].isComplete = !(temp[index].isComplete)
        }
      })
      setTodo(temp); 
    }



    return (
        <div className="app">
          <div className="todo-list">
            {todo.map((todo,index) => <Todo todo={todo} index={index} removeTodo={removeTodo} completed={completed} />)}

          </div>

          <TodoForm addTodo={addTodo}/>

        </div>
      );

}

export default App;
