import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import rootReducer from './reducers/rootReducer';
import socketMiddleware from './reducers/socketMiddleware';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

let store = createStore(rootReducer
  // ,applyMiddleware(socketMiddleware)
);
store.subscribe(() => {
  console.log("Store Updated", store.getState());
});

console.log('test dispatch');
store.dispatch({ type: 'TEST', payload: 'TEST_PAYLOAD' });
console.log('test dispatch sent');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
