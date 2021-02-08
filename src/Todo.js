import React, {useState} from "react";

function Todo({todo,index,removeTodo,completed}){
    return(
    <div className="todo" style={{textDecoration: todo.isComplete ? 'line-through' : 'none'}}> 
        {todo.text}
        {console.log(removeTodo)}

        <div>
            <button onClick={() => removeTodo(index)} > Remove </button>
            <button onClick={() => completed(index)} > complete </button>
        </div>
    </div>
    );
}

export default Todo;