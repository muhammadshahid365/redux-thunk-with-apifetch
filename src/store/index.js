import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import postReducer from '../reducers/postReducer'


const store = createStore(postReducer, {posts:[]}, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));



export default store;