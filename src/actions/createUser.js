const createUser = (state) => {
  return dispatch => {
    dispatch({ type: "CREATING_USER" });
    return fetch('/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    }).then(resp => resp.json())
      .then(json => {
        dispatch({ type: "LOADED_USER", payload: json })
      })
  }
}

export default createUser
