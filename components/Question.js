import React from 'react';
import { Link } from 'react-router'

class Question extends React.Component {
  render() {
    const question = this.props.question;
    const userName = this.props.userName;
    const show_path = `/${userName}/questions/${this.props.i}`;
    return (
        <div className='ev'>
          {question.author+": "+question.text}
          <Link to={show_path}>Show answers/add answer</Link>
        </div>  
    )
  }
}

export default Question;
