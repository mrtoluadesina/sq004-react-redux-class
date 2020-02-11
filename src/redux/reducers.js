import {combineReducers} from 'redux';
import userReducer from '../views/Users/redux/reducer';

const appReducer = combineReducers({
  userReducer
})

export default appReducer;