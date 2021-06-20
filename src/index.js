import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import astronautsReducer from './reducers/astronautsReducer'

const s = createStore(astronautsReducer, applyMiddleware(thunk))

const TheGetDown = () => <Provider store={s}><App /></Provider>

ReactDOM.render( <TheGetDown />, document.getElementById('root') );
