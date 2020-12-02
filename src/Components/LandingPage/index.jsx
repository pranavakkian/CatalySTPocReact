import { useSelector } from 'react-redux';
// import { Header } from 'semantic-ui-react';

function LandingPage() {
  const userName = useSelector((state) => state.UserInfoReducer.userName);
  const display = `Welcome ${userName}`;
  return (
    <div>
      <h1>{display}</h1>
    </div>
  );
}

export default LandingPage;
