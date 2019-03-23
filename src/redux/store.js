import { createStore , combineReducers , applyMiddleware  } from 'redux'
import wordsReducer from './words.reducers';
import thunk from 'redux-thunk'
import filterModeReducer from './filtermode.reducers';
import shouldShowFormReducer from './shouldshowform.reducers';

const reducer = combineReducers({
    words : wordsReducer,
    filterMode : filterModeReducer,
    shouldShowForm : shouldShowFormReducer
})
export const store = createStore(reducer,applyMiddleware(thunk));
 