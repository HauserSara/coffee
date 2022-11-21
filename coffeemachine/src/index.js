import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import App from './App';

const doWarn = window.console.warn
window.console.warn = (...args) => {
    if(typeof args[0] !== 'string' || !args[0].startsWith('Warning: componentWillReceiveProps has been renamed'))
        doWarn(...args)
}

ReactDOM.render(<App />, document.getElementById('root'));
