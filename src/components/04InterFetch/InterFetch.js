import React, { useState } from 'react';
import {
  FETCH_URL_JSON_SERVER,
} from '../../constants';

// Создай форму c input и сделай запрос методом GET
// по адресу FETCH_URL_JSON_SERVER и параметру name(Вася|Петя|Иннокентий|Маша)
// то есть, чтобы получить инфу о Пете запрос должен выглядеть следующим образом
// fetch(${FETCH_URL_JSON_SERVER}?name=Вася) и отрендерить полученный результат
// в диве формате name: ... Title ...

export default function InterFetch() {
  const [input, setInput] = useState();
  const [info, setInfo] = useState([]);
  const findInfo = async (e) => {
    e.preventDefault();
    const res = await fetch(`${FETCH_URL_JSON_SERVER}?name=${input}`);
    const data = await res.json();
    console.log(data);
    setInfo(data);
  };
  return (
    <div>
      <form onSubmit={findInfo}>
        <input onChange={(e) => setInput(e.target.value)} type="text" name="name" />
        <button type="submit">FIND!</button>
      </form>
      <div>
        {info.map((el) => (
          <div key={el.id}>
            name:
            {el.name}
            {' '}
            Title:
            {el.title}
          </div>
        ))}
      </div>
    </div>
  );
}
