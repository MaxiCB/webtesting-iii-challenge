import React from 'react';
import ReactDOM from 'react-dom';

// Styling
import './index.css';

// Components
import Dashboard from './dashboard/Dashboard';

// Services
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";

// Reducer
import { rootReducer } from './reducers/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <Dashboard />
    </Provider>
    , document.getElementById('root'));
