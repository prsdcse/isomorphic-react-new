import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { fetchQuestionsSuccess } from '../actions/quectionsActions';

export function* questionsSaga() {
    try {
        const results = yield call(fetch, '/api/questions');        
        const questions = yield results.json();
        console.warn('questions', questions);
        yield put(fetchQuestionsSuccess(questions));
    } catch (err) {
        console.error('questions saga error', err);
    }
}

export default function* defaultSaga() {
    yield [
        takeLatest('FETCH_QUESTIONS', questionsSaga),
    ];
}