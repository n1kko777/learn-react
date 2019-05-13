export const toggleNav = (event, openNav) => dispatch => {
  event.preventDefault();
  dispatch({ type: "OPEN_NAV", payload: !openNav });
};
