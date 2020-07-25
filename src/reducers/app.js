const INITIAL_STATE = {
  environment: 'production',
  name: 'react-spotify',
  version: '0.1.0'
}

export default function app(state = INITIAL_STATE, action) {
  switch(action.type){
    case ('NÃO SEI AINDA'):
      return true;
    default:
      return state;
  }
} 