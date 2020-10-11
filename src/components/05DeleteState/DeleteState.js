import React, { useState } from 'react';
import Name from './components/Name';

// Сделай так, чтобы кнопки рядом с именами удаляли эти имена.
// Важно, что бы порядок удаления был соблюден,
// то есть кнопка рядом с Васей не удаляет Илью
export default function DeleteState() {
  const [state, setState] = useState([{ name: 'Vasya', id: 1 }, { name: 'Petya', id: 2 }, { name: 'Ilya', id: 3 }, { name: 'Vasya', id: 4 }, { name: 'Vasya', id: 5 }]);
  // const deleteItem = (id) => {
  //   setState(
  //     console.log(state),
  //     // [...state].filter((el) => state.indexOf(el) !== id);
  //     // state.filter((el) => state.indexOf(el) !== id),
  //     state.filter((el) => console.log(state.indexOf(el))),
  //     console.log(state),
  //   );
  // };
  return (
    <>
      <ul>
        {state.map((el, i) => <Name key={el.id} name={el.name} setState={setState} id={el.id} state={state} />)}
      </ul>
    </>
  );
}
