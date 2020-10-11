import React, { useState } from 'react';

// Создайте input в который можно вводить текст
// Затем создайте div в котором будет отображаться текст из инпута
const BasicState = () => {
  const [input, setInput] = useState('');
  const inputChange = ({ target: { value } }) => {
    setInput(value);
  };
  return (
    <>
      <input onChange={inputChange} type="text" name="text" />
      <div>{input}</div>
    </>

  );
};

export default BasicState;
