export default (state = { user: {}, loading: false }, action) => {
  switch (action.type) {
    case "CREATING_USER":
      return { ...state, loading: true }
    default:
      return state;
  }
}
