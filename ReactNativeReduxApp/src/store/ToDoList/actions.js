export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item,
  };
};

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id,
  };
};

export const UPDATE_LIST = 'UPDATE_LIST';
export const updateList = (list) => {
  return {
    type: UPDATE_LIST,
    list,
  };
};

export const CLEAR_LIST = 'CLEAR_LIST';
export const clearList = () => {
  return {
    type: CLEAR_LIST,
  };
};
