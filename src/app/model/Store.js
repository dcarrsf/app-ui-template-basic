import { createStore, combineReducers } from 'redux';
import modelReducer from './ModelReducer';

const model = combineReducers({
    model: modelReducer
});
const store = createStore(model);

export default store;
