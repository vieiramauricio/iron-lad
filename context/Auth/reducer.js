const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {token: '3123123'}
    case 'LOGOUT':
      return {}
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
};

export default AuthReducer;