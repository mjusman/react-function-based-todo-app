import React from "react";

const Header = () => {
  // style object for inline style in react.
  const headerStyle = {
    fontSize: "2.5em",
    fontWeight: 600,
    color: "#595959",
    textTransform: "lowerCase",
    margin: "10px"
    
  }
    return (
      <header style={headerStyle}>
        <h1>Todo App</h1>
      </header>
    );
}
 
export default Header;