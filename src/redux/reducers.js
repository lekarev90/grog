import { ADD_WORD } from './actionTypes';

const reducer = (state, action) => {
  console.log(state, 'state');
  console.log(action, 'action');
  switch (action.type) {
    case ADD_WORD:
      console.log(state, 'state, names');
      return { ...state, names: [...state.names, action.payload] };

    default:
      return 'state';
  }
};

export default reducer;
