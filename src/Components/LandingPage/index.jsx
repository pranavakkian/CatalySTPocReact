import { useSelector } from 'react-redux';
// import { Header } from 'semantic-ui-react';

function LandingPage() {
  const userName = useSelector((state) => state.UserInfoReducer.userName);
  return (
    <div>
      <h1>{`Welcome ${userName}`}</h1>
    </div>
  );
}

export default LandingPage;
