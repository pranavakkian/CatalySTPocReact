import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const LoginForm = (props) => {
  const { handleLoginForm } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    if (username !== '' && password !== '') {
      handleLoginForm(username, password);
    }
  };
  return (
    <div>
      <Form>
        <Form.Input>
          <input required id="username" placeholder="Username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Input>
        <Form.Field>
          <input required placeholder="Password" value={password} label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Field>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

LoginForm.propTypes = {
  handleLoginForm: PropTypes.func.isRequired,
};
export default LoginForm;
