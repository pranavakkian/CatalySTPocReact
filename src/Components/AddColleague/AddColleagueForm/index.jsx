import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button, Dropdown, Form, Modal,
} from 'semantic-ui-react';
import { ROOT_PATH } from '../../../Constants';
import handleSetColleagueData from '../../../Redux/AddColleagueReducer/Action';

const AddColleagueForm = () => {
  const [username, setUsername] = useState('');
  const [colleagueContact, setContact] = useState(null);
  const [jobtitle, setJobTitle] = useState('');
  const options = [
    { key: '01', text: 'Team Member', value: 'Team Member' },
    { key: '02', text: 'Developer', value: 'Developer' },

  ];
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openCloseBox, setOpenCloseBox] = useState(false);
  const handleAddcolleague = () => {
    if (username !== '' && colleagueContact !== '' && jobtitle !== '') {
      dispatch(handleSetColleagueData(
        { name: username, contact: colleagueContact, jobTitle: jobtitle },
      ));
      setOpen(true);
    } else {
      setOpenCloseBox(true);
    }
  };
  const handlePop = () => {
    setOpen(false);
    history.push(ROOT_PATH);
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
          <Button onClick={handlePop}>OK</Button>
        </Modal.Actions>
      </Modal>
      <Modal
        centered={false}
        open={openCloseBox}
      >
        <Modal.Content>
          <Modal.Description>
            Invalid Credentials
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpenCloseBox(false)}>Cancel</Button>
        </Modal.Actions>
      </Modal>
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
          <input id="contact" type="number" placeholder="contact" value={colleagueContact} label="Contact" onChange={(e) => setContact(e.target.value)} />
        </Form.Field>
        <Button type="submit" onClick={handleAddcolleague}>Submit</Button>
      </Form>
    </div>
  );
};

export default AddColleagueForm;
