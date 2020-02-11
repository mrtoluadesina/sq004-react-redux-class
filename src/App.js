import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Users from './views/Users';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users' component={Users} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

