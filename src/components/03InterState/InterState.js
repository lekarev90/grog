import React, { useState } from 'react';

// Создайте input в который можно вводить текст
// Создайте кнопку после нажатия на которую текст будет добавляться в стейт
// Для наглядности сделайте так, чтобы каждый элемент стейта выводился в
// каждый отдельный div как отдельное слово, окруженное своим индексом
// например: 0privet0, 1privet1 и так далее

const InterState = () => {
  const [input, setInput] = useState('');
  const [words, setWords] = useState([]);
  const inputChange = ({ target: { value } }) => {
    setInput(value);
  };
  const createWord = () => {
    setWords([...words, input]);
    setInput('');
  };
  return (
    <div>
      <input onChange={inputChange} type="text" name="word" value={input} />
      <button onClick={createWord} type="submit">Add</button>
      {words.map((el, i) => (
        <div key={el}>
          {i}
          {el}
          {i}
        </div>
      ))}
    </div>
  );
};

export default InterState;
