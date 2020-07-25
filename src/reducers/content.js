const INITIAL_STATE = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  planingNowTrack: null,
  playerHeight: 0,
  status: 'idle',
  errorMessage: '',
}

export default function content(state = INITIAL_STATE, action) {
  const { payload } = action;

  switch(action.type) {
    case 'ADD_PLAYER_TRACK':
      return {
        ...state,
        playingNowId: payload.id,
        playingNowTrack: payload,
      };
    case 'GET_CATEGORIES_REQUEST':
      return {
        ...state,
        categories: [],
        status: 'running',
      };
    case 'GET_CATEGORIES_SUCCESS':
      return {
        ...state,
        errorMessage: '',
        categories: payload,
        status: 'success',
      };
    case 'GET_CATEGORIES_FAILED':
      return {
        ...state,
        categories: [],
        errorMessage: payload.message,
        status: 'error',
      };
    case 'GET_CATEGORY_PLAYLIST_REQUEST':
      return {
        ...state,
        playlists: [],
        status: 'running',
      };
    case 'GET_CATEGORY_PLAYLIST_SUCCESS':
      return {
        ...state,
        errorMessage: '',
        playlists: payload,
        status: 'success',
      };
    case 'GET_CATEGORY_PLAYLIST_FAILED':
      return {
        ...state,
        errorMessage: payload.message,
        playlists: [],
        status: 'error',
      };
    case 'GET_PLAYLIST_TRACKS_REQUEST':
      return {
        ...state,
        tracks: [],
        status: 'running',
      };
    case 'GET_PLAYLIST_TRACKS_SUCCESS':
      return {
        ...state,
        errorMessage: '',
        tracks: payload.filter(({track}) => track),
        status: 'success',
      };
    case 'GET_PLAYLIST_TRACKS_FAILED':
      return {
        ...state,
        tracks: [],
        errorMessage: payload.message,
        status: 'error',
      };
    case 'REMOVE_PLAYER_TRACK':
      return {
        ...state,
        playingNowId: null,
        playingNowTrack: null,
        playerHeight: 0,
      };
    case 'SET_PLAYER_HEIGHT':
      return {
        ...state,
        playerHeight: payload,
      };
    default:
      return state
  }
};