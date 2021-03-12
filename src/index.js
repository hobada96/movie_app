import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import rootReducer from './modules/rootReducer'
import {createStore} from "redux";
import Reactotron from 'reactotron-react-js'

const store = createStore(rootReducer);
Reactotron.configure().connect();
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


