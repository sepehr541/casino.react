import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import mainReducer from './reducers/rootReducer';
import socketMiddleware from './reducers/socketMiddleware';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
// import  Logger from './reducers/logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(mainReducer,
  composeEnhancers(
    applyMiddleware(
      socketMiddleware()
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
