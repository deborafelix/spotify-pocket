const INITIAL_STATE = {
  accessToken: '',
  errorMessage: '',
  expirationTime: '',
  expiresIn: '',
  isLogged: false,
  tokenType: '',
}

export default function auth(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SUCCESS_AUTH':
      return {...state, ...action.payload };
    case 'FAILURE_AUTH':
      return { ...state, ...action.payload }
    default: 
      return state;
  }
};