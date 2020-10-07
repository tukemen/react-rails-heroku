import React from 'react';
import ReactDOM from 'react-dom';
import MainComp from './Components/MainComp'
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
  <Router>
    <MainComp /> 
  </Router>,
  document.getElementById('root')
);

