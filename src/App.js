import React from 'react';

import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import { Header } from './app/components/Header.js'
import { Home0 } from './features/home/Home0.js'
import { ArticleIndex } from './features/article-index/article-index.js'
import ArticleView from './features/article-view/article-view.js'
import { Home } from './features/home/Home.js'
import { About } from './features/about/about.js'

function App() {
return (
  <div className="App">
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/articles' component={ArticleIndex} />
          <Route path="/article/:articleKey?" component={ArticleView} />
          <Route exact path="/game" component={Home0} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
  </div>
);
}

export default App;
