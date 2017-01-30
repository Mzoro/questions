const questions = (state={}, action) => {
  switch (action.type) {
    case 'ADD_ANSWER':
      const id = action.questionId
      const nextState = Object.assign({},state)
      nextState[id].isAnswered=true
      nextState[id].answers.push({author:action.author, text: action.text})
      return nextState
    case 'ADD_QUESTION':
      const key = (new Date()).getTime()
      const newState = Object.assign({},state)
      newState[key] = {
        author: action.author,
        text: action.text,
        answers: [],
        isAnswered: false
      }
      return newState
    default:
      return state
  }
}
export default questions