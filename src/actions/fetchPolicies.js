// const createUser = (state) => {
//   return dispatch => {
//     dispatch({ type: "CREATING_USER" });
//     return fetch('/users', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(state)
//     }).then(resp => resp.json())
//       .then(json => {
//         dispatch({ type: "LOADED_USER", payload: json })
//       })
//   }
// }
//
// export default createUser

const fetchPolicies = (user) => {
  return dispatch => {
    dispatch({ type: "LOADING_POLICY_DATA" });
    console.log(user)
    return fetch(`/users/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resp => resp.json())
      .then(json => {
        console.log(json)
        dispatch({ type: "LOADED_POLICY", payload: json })
      })
  }
}

export default fetchPolicies
