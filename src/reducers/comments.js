export default function reducer(state = [], action) {
  if (action.type === "FETCH_COMMENTS") {
    return action.payload;
  }

  if (action.type === "ERROR_COMMENTS") {
    return action.payload;
  }

  return state;
}
