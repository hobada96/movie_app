import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import movieRedux from './redux'
import { Provider } from 'react-redux';
import createStore from 'redux'

const store = createStore(movieRedux)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
