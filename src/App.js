import './app_styles.css';
import React, {useState} from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ToDoItem from './components/ToDoItem';
import AddToDoItem from './components/AddToDoItem';
import Popup from './components/Popup';



function App() {
  const [toDoList, setToDoList] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  // This adds the newest to-do item to the toDoList, which is an array containing all our to-do's.
  function addToDO(item) {
    setToDoList((prevItems) => {
      return [...prevItems, item]
    })
  }

  // This removes the to-do with index = id from our toDoList array. 
  function deleteToDO(id) {
    setToDoList((prevItems) => {
      return prevItems.filter((item,index) => {
        return index != id;
      });
    });
  }

  // This allows the user to close the popup. 
  // Note: The popup contains instructions on how to use the website, which can then be permanently closed once the user has read them. 
  function closePopup(){
    setIsOpen(false);
  }

  return (
    <div className="App">
      <Header />
      <div className="to-do">
        <div className="to-do-container">
          <AddToDoItem
            onAdd = {addToDO}
          />
          <div className='List'>
            <ul>
              { toDoList.map((item,index) => (
                <ToDoItem 
                  id = {index}
                  text = {item} 
                  onChecked = {deleteToDO}
                />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      {isOpen && <Popup handleClose={closePopup}/>}
      <Footer />
    </div>
  );
}

export default App;
