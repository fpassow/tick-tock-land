import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import state0 from './state0'
import rootReducer from './rootReducer'


const store = createStore(rootReducer, state0, applyMiddleware(thunkMiddleware))

//The "system clock" dispatches one TICK per second.
//This drives everything that isn't driven by UI events.
setInterval( ()=>{store.dispatch({type:'TICK'})}, 1000)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
