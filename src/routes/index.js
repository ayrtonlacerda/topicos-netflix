import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';

const AppRouter = () => (
  <Switch>
    <Route exact={true} path="/screen1" component={props => <Screen1 {...props} />} />
    <Route exact={true} path="/screen2" component={props => <Screen2 {...props} />} />
  </Switch>
)

export { AppRouter };

/*
<Route exact={true} path="/" component={() => <WrapContainer><Home /></WrapContainer>} />
*/
