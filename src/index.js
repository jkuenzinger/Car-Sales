import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// below im importing my reducer my createStore and Provider to set a up redux store here
import {reducer} from './reducer/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';

// below im setting up my store and pluging in the reduce i imported
const store = createStore(reducer)

// I then wrap my app in the provider and and attach the store props to it
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
