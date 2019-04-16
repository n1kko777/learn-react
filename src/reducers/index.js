import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import usersReducer from './usersReducer';

export default combineReducers({
  comments: commentsReducer,
  users: usersReducer
});
