export function fetchQuestions() {
    return {
        type: 'FETCH_QUESTIONS'
    };
}

export function fetchQuestionsSuccess(questions) {
    return {
        type: 'FETCH_QUESTIONS_SUCCESS',
        questions
    };
}