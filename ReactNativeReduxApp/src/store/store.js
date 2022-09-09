import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';

import ToDoListEpic from './ToDoList/epics';
import ToDoListReducer from './ToDoList/reducers';

const epicMiddleware = createEpicMiddleware();

const logger = createLogger();

const epics = combineEpics(ToDoListEpic);

const configureStore = () => {
  let store;
  if (__DEV__) {
    store = createStore(
      combineReducers({
        ToDoList: ToDoListReducer,
      }),
      composeWithDevTools(
        applyMiddleware(
          epicMiddleware,
          logger, // redux logging to the console.
        ),
      ),
    );
  } else {
    store = createStore(
      combineReducers({
        //
      }),
      composeWithDevTools(applyMiddleware(epicMiddleware)),
    );
  }

  epicMiddleware.run(epics);

  return store;
};

export default configureStore;
