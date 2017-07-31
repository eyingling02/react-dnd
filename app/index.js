import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
var observe = require('./components/Game').observe;
var rootEl = document.getElementById('app')

observe(function (knightPosition) {

  ReactDOM.render(
    <Board knightPosition={knightPosition=[7, 4]} />,
    rootEl
  );
});
