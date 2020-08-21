 const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        email: action.payload.username,
        token: action.payload.token,
        signed: action.payload.signed,
      };
    default:
      return state;
  }
};

export default authReducer;