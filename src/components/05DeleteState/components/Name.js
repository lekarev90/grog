import React from 'react';

function Name(props) {
  const {
    id, name, setState, state,
  } = props;
  const deleteItem = () => {
    setState(state.filter((el) => el.id !== id));
  };
  return (
    <>
      <li>{name}</li>
      <button onClick={deleteItem} type="button">
        Удалить
      </button>
    </>
  );
}

export default Name;
