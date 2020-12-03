import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const LoginForm = (props) => {
  const { handleLoginForm } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <Form>
        <Form.Field>
          <input id="username" placeholder="Username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <input placeholder="Password" value={password} label="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Field>
        <Button type="submit" onClick={() => handleLoginForm(username, password)}>Submit</Button>
      </Form>
    </div>
  );
};

LoginForm.propTypes = {
  handleLoginForm: PropTypes.func.isRequired,
};
export default LoginForm;
