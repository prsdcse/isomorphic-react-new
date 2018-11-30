import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from './actions/quectionsActions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(fetchQuestions());
    }
    render() {
        return (
            <Fragment>
                <h1>Hello Isomorphic React {this.props.test} !!!</h1>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);