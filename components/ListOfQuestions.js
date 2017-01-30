import React from 'react';
import Question from './Question';

class ListOfQuestions extends React.Component {
  submit(event) {
    event.preventDefault();
    this.props.addQuestion(this.props.params.userName, this.refs.text.value)
    this.refs.questionForm.reset();
  }
  filterObj (obj, filter) {
    const filteredObj = {}
    switch (filter) {
      case 'SHOW_ALL':
        return obj
      case 'SHOW_ANSWERED':
        for (let key in obj) {
          if (obj[key]['isAnswered']) 
            filteredObj[key]=obj[key]
        }
        return filteredObj
      case 'SHOW_NOT_ANSWERED':
        for (let key in obj) {
          if (!obj[key]['isAnswered']) 
            filteredObj[key]=obj[key]
        }
        return filteredObj
      default:
        return obj  
    }
  }
  render() {
    const questions = this.props.questions
    const visibleQuestions = this.filterObj(questions, this.props.visibilityFilter)
    return (
      <div>
        {Object.keys(visibleQuestions).map(
          (i) => <Question key={i} i={i} question={questions[i]} userName={this.props.params.userName}/>)}
        <form ref='questionForm' onSubmit={this.submit.bind(this)}>
          <h2>{this.props.params.userName}, please enter your question</h2>
          <input type='text' ref='text' required/>
          <button type='Submit'>ask question</button>
        </form>
      </div>
    )
  }
}

export default ListOfQuestions;

