export default function reducer(state = null, action) {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload;
    case "FETCH_USER_ERROR":
      return action.payload;

    default:
      break;
  }
  return state;
}
