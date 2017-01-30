import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Wrapper from '../components/Wrapper'

import * as actionCreators from '../actions/actionCreators'

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    visibilityFilter:state.visibilityFilter
  }
}
const mapDispachToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispachToProps)(Wrapper);

export default App;