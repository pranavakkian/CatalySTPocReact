import { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import { handleIsLoggedIn, handleSetUserName } from '../../Redux/UserInfoReducer/Action';

const Login = () => {
  const users = [{ name: 'admin', password: 'admin123' }, { name: 'abc', password: 'abc123' }];
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLoginForm = (username, password) => {
    if (users.some((user) => user.name === username && user.password === password)) {
      dispatch(handleIsLoggedIn(true));
      dispatch(handleSetUserName(username));
    } else {
      setOpen(true);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm handleLoginForm={handleLoginForm} />
      <Modal
        centered={false}
        open={open}
      >
        <Modal.Content>
          <Modal.Description>
            Invalid Credentials.
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Login;
