export const addQuestion = (author, text) => {
  return {
    type: 'ADD_QUESTION',
    author,
    text
  }
}
export const addAnswer = (questionId, author, text) => {
  return {
    type: 'ADD_ANSWER',
    questionId,
    author,
    text
  }
}
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
