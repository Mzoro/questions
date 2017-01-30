import React from 'react';
import { Link } from 'react-router';

class Wrapper extends React.Component{
  setFilter(e) {
    this.props.setVisibilityFilter(e.target.value)
  }
  render() {  
    return (
      <div>
        <Link to="/"><button onClick={this.setFilter.bind(this)} value="SHOW_ALL">Log out</button></Link>
        <div className={!this.props.params.questionId ? '':'none'} onChange={this.setFilter.bind(this)}>
          <input type="radio" value="SHOW_ALL" name="filter" defaultChecked="checked"/> All
          <input type="radio" value="SHOW_ANSWERED" name="filter"/> Answered
          <input type="radio" value="SHOW_NOT_ANSWERED" name="filter"/> Not answered
        </div>
        { React.cloneElement(this.props.children, {...this.props}) }
      </div>
    );
  }
}

export default Wrapper;