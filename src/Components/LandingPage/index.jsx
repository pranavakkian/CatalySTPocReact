import { useSelector } from 'react-redux';
import { Header } from 'semantic-ui-react';

function LandingPage() {
  const userName = useSelector((state) => state.UserInfoReducer.userName);
  return (
    <div>
      <Header as="h1" textAlign="center">
        Welcome
        {' '}
        {userName}
      </Header>
    </div>
  );
}

export default LandingPage;
