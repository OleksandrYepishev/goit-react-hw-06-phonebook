import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phohebookReducer from '../redux/phonebook/phonebook-reducer';

const rootReducer = combineReducers({
    phonebook: phohebookReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;