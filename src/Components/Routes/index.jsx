import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/index';
import Login from '../Login';
import RootPath from '../../Constants/Constants';

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.UserInfoReducer.isLoggedIn);
  return isLoggedIn ? (
    <Switch>
      <Route path={RootPath} component={LandingPage} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path={RootPath} component={Login} />
    </Switch>
  );
};

export default Routes;
