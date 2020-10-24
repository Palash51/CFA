// 'use strict';

import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './reducers/store';
import App from './app';

render(
<>
    <Provider store={store}>
        <App />
    </Provider>
</>
, document.getElementById('root'));
