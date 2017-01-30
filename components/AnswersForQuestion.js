import React from 'react';
import { Link } from 'react-router';

import Answer from './Answer';

class AnswersForQuestion extends React.Component {
  submit(event) {
    event.preventDefault();
    this.props.addAnswer(this.props.params.questionId ,this.props.params.userName, this.refs.text.value)
    this.refs.answerForm.reset();
  }
  render() {
    const question = this.props.questions[this.props.params.questionId]
    const pathToQuestions=`/${this.props.params.userName}/questions/`
    return (
      <div>
        <Link to={pathToQuestions}>Back to questions</Link>
        <br/>
        {question.text}
        {question.answers.map((answer, i) => <Answer key={i} answer={answer}/>)}
        <form ref='answerForm' onSubmit={this.submit.bind(this)}>
          <h2>{this.props.params.userName}, please enter your answer</h2>
          <input type='text' ref='text' required/>
          <button type='Submit'>add answer</button>
        </form>
      </div>
    )
  }
} 

export default AnswersForQuestion;