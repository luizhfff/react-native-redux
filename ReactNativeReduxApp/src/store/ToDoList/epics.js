import { combineEpics, ofType } from 'redux-observable';
import { withLatestFrom, mergeMap } from 'rxjs/operators';
import { ADD_ITEM, DELETE_ITEM, UPDATE_LIST } from './actions';
import uuid from 'react-native-uuid';

const addItemEpic = (action$, state$) =>
  action$.pipe(
    ofType(ADD_ITEM),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      let newList = state.ToDoList.items;
      newList.push({
        id: uuid.v4(),
        text: action.item,
      });
      return [
        {
          type: UPDATE_LIST,
          list: newList,
        },
      ];
    }),
  );

const deleteItemEpic = (action$, state$) =>
  action$.pipe(
    ofType(DELETE_ITEM),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      let newList = state.ToDoList.items.filter((el) => {
        return el.id !== action.id;
      });
      return [
        {
          type: UPDATE_LIST,
          list: newList,
        },
      ];
    }),
  );

const ToDoListEpic = combineEpics(addItemEpic, deleteItemEpic);

export default ToDoListEpic;
