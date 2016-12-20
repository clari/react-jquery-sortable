import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import Example from './Example';

ReactDOM.render(<Example />, document.getElementById('content'));
