import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Drill1 from './state-drills/HelloWorld';
// import Roullete from './state-drills/roullete';
import sections from './state-drills/sections';
import Accordion from './state-drills/Accordion';

ReactDOM.render(<Accordion sections={sections}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
