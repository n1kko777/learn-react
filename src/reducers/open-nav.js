export default function reducer(state = false, action) {
  if (action.type === "OPEN_NAV") {
    return action.payload;
  }

  return state;
}
