import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import AppTest from '@views/pages/test';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/test" exact component={AppTest} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
