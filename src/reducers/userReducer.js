export default (state = { user: {}, loading: false, loadingPolicy: false, error: false }, action) => {
  switch (action.type) {
    case "CREATING_USER":
      return ({ ...state, loading: true, error: false });
    case "LOADED_USER":
      return ({ user: action.payload, loading: false })
    case "LOADING_POLICY_DATA":
      return ({ ...state, loadingPolicy: true })
    case "LOADED_POLICY":
      return ({ ...state, user: { ...state.user, graphData: action.payload }, loadingPolicy: false })
    case "ERROR":
      return ({ ...state, user: {}, loading: false, error: true })
    default:
      return state;
  }
}
