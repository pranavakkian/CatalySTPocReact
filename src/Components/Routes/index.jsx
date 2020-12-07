import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/index';
import Login from '../Login';
import { RootPath, addColleaguePath, viewColleaguePath } from '../../Constants';
import AddColleaguePage from '../AddColleague';
import ViewColleaguePage from '../ViewColleaguePage';

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.UserInfoReducer.isLoggedIn);
  return isLoggedIn ? (
    <Switch>
      <Route exact path={RootPath} component={LandingPage} />
      <Route path={addColleaguePath} component={AddColleaguePage} />
      <Route path={viewColleaguePath} component={ViewColleaguePage} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path={RootPath} component={Login} />
    </Switch>
  );
};

export default Routes;
