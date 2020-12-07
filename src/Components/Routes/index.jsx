import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/index';
import Login from '../Login';
import { ROOT_PATH, ADDCOLLEAGUE_PATH, VIEWCOLLEAGUE_PATH } from '../../Constants';
import AddColleaguePage from '../AddColleague';
import ViewColleaguePage from '../ViewColleaguePage';

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.UserInfoReducer.isLoggedIn);
  return isLoggedIn ? (
    <Switch>
      <Route exact path={ROOT_PATH} component={LandingPage} />
      <Route path={ADDCOLLEAGUE_PATH} component={AddColleaguePage} />
      <Route path={VIEWCOLLEAGUE_PATH} component={ViewColleaguePage} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path={ROOT_PATH} component={Login} />
    </Switch>
  );
};

export default Routes;
