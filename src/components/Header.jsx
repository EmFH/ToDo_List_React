import React from "react";

// Setting up the header component.
function Header(){
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    return (
        <header>
          <h1>To do List</h1>
          <p> {day} / {month} / {year}</p>
        </header>
      );
}

export default Header;