import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/configureStore';
import './styles/app.scss';

import App from './components/App';
import AnswersForQuestion from './components/AnswersForQuestion';
import ListOfQuestions from './components/ListOfQuestions';
import LoginForm from './components/LoginForm';

render((
  <Provider store={store}>
    <Router history = {history}>
      <Route path="/" component={LoginForm}/>
      <Route path="/:userName/questions" component={App}>
        <IndexRoute component={ListOfQuestions}/>
        <Route path="/:userName/questions/:questionId" component={AnswersForQuestion}/>
      </Route>  
    </Router>  
  </Provider>  
), document.getElementById('app'));
