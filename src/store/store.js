import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import logger from './middleware/logger';
import service from './middleware/service';

//const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer,applyMiddleware(service));
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@ IN STORE');  
export default store;