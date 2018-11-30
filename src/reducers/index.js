import questionsReducer from './questionsReducer';
import { combineReducers } from 'redux';

export default function createReducer() {
    const rootReducer = combineReducers({
        questions: questionsReducer,
    });

    return rootReducer;
}