import { createStore } from 'redux';
import reducers from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'spotifyPocketApp',
    storage,
}

const persitedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persitedReducer);

const persistedStore = persistStore(store);

export { persistedStore, store};