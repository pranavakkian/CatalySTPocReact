import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const LoginForm = () => {
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
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
