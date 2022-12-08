import React from "react";

export default function Todo (todo) {
    return(
        <div>
            <span style={{color: todo.complete ? '#AAA' : '#000'}}>
              {todo.name}
            </span>
            <button>TOGGLE</button>
            <button>DELETE</button>

        </div>
    )
};