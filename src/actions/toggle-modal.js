export const toggleModal = (modal) => dispatch => {
  dispatch({ type: "MODAL", payload: !modal });
};
