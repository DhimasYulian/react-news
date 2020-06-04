import React from 'react';
import Main from './components/layout/Main';
import NewsDetail from './components/news/NewsDetail';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { NewsProvider } from './NewsContext';

function App() {

  return (
    <NewsProvider>
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/detail/:id" exact component={NewsDetail} />
          </Switch>
        </React.Fragment>
      </Router>
    </NewsProvider>
  );
}

export default App;
