const fetchPolicies = (user) => {
  return dispatch => {
    dispatch({ type: "LOADING_POLICY_DATA" });
    // console.log(user)
    return fetch(`https://housing-policy-rails.herokuapp.com/users/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resp => resp.json())
      .then(json => {
        // console.log(json)
        dispatch({ type: "LOADED_POLICY", payload: json })
      })
  }
}

export default fetchPolicies
