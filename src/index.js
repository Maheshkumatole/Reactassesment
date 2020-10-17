import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware  } from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import Example from './login'
import { BrowserRouter, Route, Redirect, Switch,Link } from "react-router-dom";
import EMP from './emp'

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
   
   < BrowserRouter >
      <div>
      <Provider store={store}>
         <Route exact path="/" component={Example} />
          <Route path="/details" component={EMP} />
        </Provider>
       
      </div>
   </ BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
