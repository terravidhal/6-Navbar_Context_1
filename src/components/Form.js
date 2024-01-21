import React, { useContext } from 'react';
import MyContext from './../Context/MyContext';




const Form = () => {
  const { nameInput, setNameInput } = useContext(MyContext);

  return (
      <div>
        <label>Name:</label>
        <input
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
        />
      </div>
  );
};

export default Form;