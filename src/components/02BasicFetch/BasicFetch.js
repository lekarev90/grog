import React, { useState, useEffect } from 'react';
import { FETCH_URL_JSON_SERVER } from '../../constants';

// Сделайте запрос в базу данных FETCH_URL_JSON_SERVER
// Отрендерите каждый пост в листе в формате
// "Автор: Вася, title: привет"

function BasicFetch() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const db = async () => {
      const res = await fetch(FETCH_URL_JSON_SERVER);
      const data = await res.json();
      setList(data);
    };
    db();
  }, []);
  return (
    <ul>
      {list.map((el) => (
        <li key={el.id}>
          Автор:
          {' '}
          {el.name}
          , title:
          {' '}
          {el.title}
        </li>
      ))}
    </ul>
  );
}

export default BasicFetch;
