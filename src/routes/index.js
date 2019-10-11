import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const AppRouter = () => (
  <Switch>
    <Route path="/home" component={props => <HomeScreen {...props} />} />
    <Route path="/details" component={props => <DetailsScreen {...props} />} />
  </Switch>
)

export default AppRouter;

/*
<Route exact={true} path="/" component={() => <WrapContainer><Home /></WrapContainer>} />
*/