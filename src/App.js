import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Question from './components/QuestionList';
import Main from './components/Main';
import Report from './components/Report';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          {/* <Sidebar /> */}
          <div className="main">
            {/* <Nav /> */}
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/questionnaire" component={Question} />
              <Route path="/report" component={Report} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
