import { useDispatch, useSelector } from 'react-redux';
import { Button, Header } from 'semantic-ui-react';
import { handleIsLoggedIn, handleSetUserName } from '../../Redux/UserInfoReducer/Action';

function LandingPage() {
  const userName = useSelector((state) => state.UserInfoReducer.userName);
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(handleIsLoggedIn(false));
    dispatch(handleSetUserName(null));
  };
  return (
    <div>
      <Button floated="right" type="submit" onClick={signout}>Sign-out</Button>
      <Header as="h1" textAlign="center">
        Welcome
        {' '}
        {userName}
      </Header>
    </div>
  );
}

export default LandingPage;
