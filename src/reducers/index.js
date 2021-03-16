import { combineReducers } from 'redux';
import auth from './auth'
import createId from './createId'
import addDevice from './devicetype'

export default combineReducers({
  addDevice,
  createId ,
  auth
});