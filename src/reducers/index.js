import { combineReducers } from "redux";

import users from "./users";
import user from "./user";

import posts from "./posts";
import post from "./post";

import comments from "./comments";
import comment from "./comment";

import menuItems from "./menu-items";

import openNav from './open-nav';

export default combineReducers({
  users,
  user,
  posts,
  post,
  comments,
  comment,
  menuItems,
  openNav
});
