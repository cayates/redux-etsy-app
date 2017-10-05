import { createStore } from 'redux';
import reducer from './reducer';
import constants from './constants';

const store = createStore(reducer) ;

export default store;