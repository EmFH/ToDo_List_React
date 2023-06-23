import React from "react";

// Setting up the todoitem component (this will be out to do list items).
function ToDoItem(props){

    return ( 
        <div onClick = { () => {props.onChecked(props.id)}}>
            <li> {props.text} </li>
        </div>
    );

}

export default ToDoItem;