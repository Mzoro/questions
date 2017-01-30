import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import questions from './questions'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  questions,
  visibilityFilter,
  routing: routerReducer
})