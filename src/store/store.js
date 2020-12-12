import thunk from 'redux-thunk'
import {applyMiddleware,createStore} from 'redux';
import rootreducer from '../reducers/rootreducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const middleware=[thunk]
const store=createStore(rootreducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store;