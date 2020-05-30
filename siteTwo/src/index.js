import React from 'react';
import ReactDOM from 'react-dom';

import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import App2 from './components/App2'
import rootReducer from './reducers'

// import './index.css'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const wrapper = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <App2 />
    </Provider>
    , wrapper);