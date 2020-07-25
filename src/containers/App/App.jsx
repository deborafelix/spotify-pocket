import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistedStore } from '../../store';
import Routes from '../../routes';
import './App.scss';

const App = () => {
  return (
    <div className="app" data-testid="app">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
