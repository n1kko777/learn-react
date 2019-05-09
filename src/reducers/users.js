export default function reducer(state = [], action) {
  if (action.type === "FETCH_USERS") {
    return action.payload;
  }

  return state;
}
