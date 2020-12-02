import { useSelector } from 'react-redux';

function LandingPage() {
  const userName = useSelector((state) => state.UserInfoReducer.userName);
  return (
    <div>
      <h1>
        Welcome
        {' '}
        {userName}
      </h1>
    </div>
  );
}

export default LandingPage;
