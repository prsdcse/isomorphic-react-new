import { fork } from 'redux-saga/effects';
import questionsSaga from './questionsSaga';

export default function* rootSaga() {
    yield fork(questionsSaga);
}