import React, { useState } from "react";
import "./App.css";
import MyContext from "./Context/MyContext";
import Wrapper from "./components/Wrapper";


function App() {
  const [nameInput, setNameInput] = useState(''); 
  
  return (
  <div>
    <MyContext.Provider value={{nameInput, setNameInput}}>
      <Wrapper />
    </MyContext.Provider>
  </div>
  );
}

export default App;
