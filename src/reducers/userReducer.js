export default (state = { user: {}, loading: false, loadingPolicy: false }, action) => {
  switch (action.type) {
    case "CREATING_USER":
      return ({ ...state, loading: true });
    case "LOADED_USER":
      return ({ user: action.payload, loading: false })
    case "LOADING_POLICY_DATA":
      return ({ ...state, loadingPolicy: true })
    default:
    case "LOADED_POLICY":
      return ({ ...state, user: { ...state.user, action.payload }, loadingPolicy: false })
    default:
      return state;
  }
}
