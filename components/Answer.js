import React from 'react';

class Answer extends React.Component {
  render() {
    const { answer } = this.props;
    return (
      <div>
        {answer.author+": "+answer.text}
      </div>  
    )
  }
}

export default Answer;