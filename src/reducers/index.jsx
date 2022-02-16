import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';

export default combineReducers({
  todos: todosReducer,
});
