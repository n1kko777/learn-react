export default function reducer(state = [], action) {
  if (action.type === "FETCH_COMMENTS") {
    return action.payload;
  }

  return state;
}
