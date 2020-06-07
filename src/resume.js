import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';

import { render } from 'react-dom';


import registerServiceWorker from './registerServiceWorker';



import { Router as Router , Route } from 'react-router-dom'

import { store, history } from './redux/store'; //new redux
import './assets/css/layout.css'
import './assets/css/theme.min.2.css'


   
const Resume =()=> (

  

    <Provider store={store}>
      <Router history={history}>
       <App/>
        </Router>
  
    </Provider>
  
  );
  

  export default Resume;
  // export { AppLocale };
