import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Header } from 'semantic-ui-react';
import { addColleaguePath } from '../../Constants';
import { handleIsLoggedIn, handleSetUserName } from '../../Redux/UserInfoReducer/Action';
import './landingPage.css';

const LandingPage = memo(() => {
  const history = useHistory();
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
      <Container textAlign="center">
        <div className="addbutton">
          <Button onClick={() => history.push(addColleaguePath)}>Add Colleague</Button>
        </div>
        <div className="viewbutton">
          <Button>View Colleague</Button>
        </div>
      </Container>

    </div>
  );
});

export default LandingPage;
