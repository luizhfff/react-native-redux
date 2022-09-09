import { CLEAR_LIST, UPDATE_LIST } from './actions';

const initialState = {
  items: [],
};

const ToDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST:
      return Object.assign({}, state, { items: action.list });
    case CLEAR_LIST:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};

export default ToDoListReducer;
