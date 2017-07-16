import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';


import { move_left, move_right } from './actions/xPos';
import { move_up, move_down } from './actions/yPos';

import store from './store/store';
import { Provider } from 'react-redux';

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

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
