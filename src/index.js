// 'use strict';

import React from 'react';
import './index.css';
import { render } from 'react-dom';
import App from './app';
import { AppContainer } from 'react-hot-loader';


render(
<AppContainer>
        <App />
</AppContainer>
, document.getElementById('root'));
