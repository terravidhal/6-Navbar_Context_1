import React, { useContext } from 'react';
import MyContext from './../Context/MyContext';



const Navbar = () => {
  const { nameInput } = useContext(MyContext);
  
  return (
      <div>
        <span>Hello, {nameInput}</span>
      </div>
  )
}

export default Navbar;