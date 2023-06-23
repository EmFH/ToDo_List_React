import React from "react";
import CloseIcon from '@mui/icons-material/Close';

// Setting up the Popup component. 
function Popup(props){

    return (
        <div className="popup-box">
        <div className="box">
          <CloseIcon onClick={props.handleClose}></CloseIcon>
          <h2 className="popup-title">Welcome to your ToDo list for Today</h2>
          <h2 className="popup-instruction">Add a to-do</h2>
          <h3 className="popup-instruction">Just type it where it says "What do you need to do today?" and then press the <big>+</big></h3>
          <h2 className="popup-instruction">Delete a to-do</h2>
          <h3 className="popup-instruction">When you have finished a to-do, simply click on the item and it will disappear from the list.</h3>
        </div>
      </div>
    )
}

export default Popup;