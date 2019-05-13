export default function reducer(state = [], action) {
  if (action.type === "FETCH_POSTS") {
    return action.payload;
  }
  
  if (action.type === "ERROR_POSTS") {
    return action.payload;
  }

  return state;
}
