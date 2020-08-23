const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {token: action.payload}
    case 'LOGOUT':
      return {}
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
};

export default AuthReducer;