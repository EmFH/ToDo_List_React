import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

// Setting up the addtodoitem component (this is where we will be able to add items to our to-do list).
function AddToDoItem(props){
    
    const [inputText, setInputText] = useState("");

    // Setting inputText to the text that the user is writing into the input field. 
    function handleChange(event){
        setInputText(event.target.value)
    }

    return (
        <div className="add-list">
            <input onChange = {handleChange} placeholder="What do you need to do today?" value={inputText}></input>
            <IconButton onClick = {() => {
                props.onAdd(inputText);
                setInputText("");
            }}>
                <AddIcon />
            </IconButton>
        </div>
    )
}

export default AddToDoItem;