import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import { observe } from './components/Game';
var rootEl = document.getElementById('app')

observe(function (knightPosition) {

  ReactDOM.render(
    <Board knightPosition={knightPosition=[0,7]} />,
    rootEl
  );
});
