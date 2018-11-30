import { fromJS, List } from 'immutable';
export const initialState = fromJS({
    questions: List([]),
});

function questionsReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_QUESTIONS_SUCCESS': {
            return state
                .set('questions', action.questions);
        }
        default:
            return state;
    }
}

export default questionsReducer;