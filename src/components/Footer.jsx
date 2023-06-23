import React from "react";

var year = new Date().getFullYear();

// Setting up to footer component.
function Footer(){
    return (
        <footer>
          {" "}
          <p>Copyright &copy; {year} </p>
        </footer>
    );
}

export default Footer;