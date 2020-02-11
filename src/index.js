import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/reset.css'
import 'font-awesome/css/font-awesome.css'
import './styles/style.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();