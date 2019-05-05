export default (state = { user: {}, loading: false }, action) => {
  switch (action.type) {
    case "CREATING_USER":
      return ({ ...state, loading: true });
    case "LOADED_USER":
      return ({ user: action.payload, loading: false })
    default:
      return state;
  }
}
