export default function reducer(state = false, action) {
  if (action.type === "MODAL") {
    return action.payload;
  }

  return state;
}
