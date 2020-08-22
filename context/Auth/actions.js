const login = (dispatch, payload) => {
  dispatch({
    type:'LOGIN',
    payload
  })
};
const logout = (dispatch) => {
  dispatch({
    type: 'LOGOUT'
  })
}

export {
  login,
  logout
}