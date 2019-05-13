export default function reducer(state = [], action) {
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;
    case "ERROR_USERS":
      return action.payload;

    default:
      break;
  }

  return state;
}
