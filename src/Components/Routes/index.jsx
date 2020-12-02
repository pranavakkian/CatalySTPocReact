import { Route, Switch } from 'react-router-dom';
import Login from '../Login';

const Routes = () => (
  <Switch>
    <Route path="/" component={Login} />
  </Switch>
);

export default Routes;
