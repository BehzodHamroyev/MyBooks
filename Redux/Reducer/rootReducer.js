import { combineReducers } from "redux";
import BooksReducer from './BooksReducer'
import CategoryReducer from './CategoryReducer'
import GlobalReducer from './GlobalReducer'
export const reducers = combineReducers({
  GlobalReducer,
  BooksReducer,
  CategoryReducer,
});