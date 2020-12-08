import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button, Dropdown, Form, Input, Modal,
} from 'semantic-ui-react';
import { ROOT_PATH } from '../../../Constants';
import handleSetColleagueData from '../../../Redux/AddColleagueReducer/Action';

const AddColleagueForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const options = [
    { key: '01', text: 'Team Member', value: 'Team Member' },
    { key: '02', text: 'Developer', value: 'Developer' },

  ];
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const handleSubmit = () => {
    if (name !== '' && contact !== null && jobTitle !== '') {
      dispatch(handleSetColleagueData(
        { name, contact, jobTitle },
      ));
      setOpen(true);
    }
  };
  return (
    <div>
      <Modal
        centered={false}
        open={open}
      >
        <Modal.Content>
          <Modal.Description>
            Submitted Successfully
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => history.push(ROOT_PATH)}>OK</Button>
        </Modal.Actions>
      </Modal>
      <Form>
        <Form.Field>
          <Input required id="name" error={false} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Dropdown
            fluid
            selection
            placeholder="Select Job Title"
            data-testid="dropdown"
            options={options}
            value={jobTitle}
            required
            onChange={(e, data) => setJobTitle(data.value)}
          />
        </Form.Field>
        <Form.Field>
          <input required id="contact" type="number" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
        </Form.Field>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default AddColleagueForm;
