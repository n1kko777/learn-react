import { combineReducers } from "redux";

import users from "./users";
import user from "./user";

import posts from './posts';
import post from './post';

export default combineReducers({
    users,
    user,
    posts,
    post
  });
