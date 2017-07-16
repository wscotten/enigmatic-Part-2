import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';


const initialState = {
  xPos: 500,
  yPos: 500,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_LEFT':
      return Object.assign({}, state, {
        xPos: state.xPos - 5,
      });
    case 'MOVE_UP':
      return Object.assign({}, state, {
        yPos: state.yPos - 5,
      });
    case 'MOVE_RIGHT':
      return Object.assign({}, state, {
        xPos: state.xPos + 5,
      });
    case 'MOVE_DOWN':
      return Object.assign({}, state, {
        yPos: state.yPos + 5,
      });
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
window.store = store;

const move_left = () => ({
  type: 'MOVE_LEFT',
});

const move_up = () => ({
  type: 'MOVE_UP',
});

const move_right = () => ({
  type: 'MOVE_RIGHT',
});

const move_down = () => ({
  type: 'MOVE_DOWN',
});

document.onkeydown = function(evt) {
  switch(evt.keyCode) {
    case 37:
      store.dispatch(move_left());
      break;
    case 38:
      store.dispatch(move_up());
      break;
    case 39:
      store.dispatch(move_right());
      break;
    case 40:
      store.dispatch(move_down());
      break;
    default:
      // do nothing
      break;
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
