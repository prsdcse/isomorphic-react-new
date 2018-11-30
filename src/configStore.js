import {
    createStore,
    applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import saga from './sagas';
import createReducer from './reducers'

export default function (initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewarechain = [sagaMiddleware];
    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger();
        middlewarechain.push(logger);
    }
    const store = createStore(createReducer(), initialState, applyMiddleware(...middlewarechain));
    sagaMiddleware.run(saga);
    return store;
}