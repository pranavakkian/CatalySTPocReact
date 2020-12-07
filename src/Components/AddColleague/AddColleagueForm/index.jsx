import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Dropdown, Form } from 'semantic-ui-react';
import handleSetColleagueData from '../../../Redux/AddColleagueReducer/Action';

const AddColleagueForm = () => {
  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [jobtitle, setJobTitle] = useState('');
  const options = [
    { key: '01', text: 'Team Member', value: 'Team Member' },
    { key: '02', text: 'Developer', value: 'Developer' },

  ];
  const dispatch = useDispatch();
  const handleAddcolleague = () => {
    dispatch(handleSetColleagueData({ name: username, contact, jobTitle: jobtitle }));
  };
  return (
    <div>
      <Form>
        <Form.Field>
          <input id="username" placeholder="Username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Dropdown
            fluid
            selection
            placeholder="Job title"
            data-testid="dropdown"
            options={options}
            value={jobtitle}
            onChange={(e, data) => setJobTitle(data.value)}
          />
        </Form.Field>
        <Form.Field>
          <input id="contact" placeholder="Contact" value={contact} label="Contact" onChange={(e) => setContact(e.target.value)} />
        </Form.Field>
        <Button type="submit" onClick={handleAddcolleague}>Submit</Button>
      </Form>
    </div>
  );
};

export default AddColleagueForm;
