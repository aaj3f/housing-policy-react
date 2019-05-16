const createUser = (state) => {
  return dispatch => {
    dispatch({ type: "CREATING_USER" });
    return fetch('https://housing-policy-rails.herokuapp.com/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    }).then(resp => {
        if (!resp.ok) {
          throw Error(resp.json());
        } else {
          return resp.json()
        }
      })
      .then(json => {
        dispatch({ type: "LOADED_USER", payload: json })
      })
      .catch(error => {
        console.error(error)
        console.log(error)
        dispatch({ type: "ERROR" })
      })
  }
}

export default createUser
