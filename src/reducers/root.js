import { combineReducers } from 'redux';
import xPos from './xPos';
import yPos from './yPos';
import path from './path';

export default combineReducers({
  xPos,
  yPos,
  path,
});
