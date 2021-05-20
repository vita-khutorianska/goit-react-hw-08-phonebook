import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import store from './Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
