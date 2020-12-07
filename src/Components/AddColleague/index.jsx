import { memo } from 'react';
import { Header } from 'semantic-ui-react';
import AddColleagueForm from './AddColleagueForm';

const AddColleaguePage = memo(() => (
  <div>
    <Header as="h1" textAlign="center">
      Add Colleague
    </Header>
    <AddColleagueForm />
  </div>
));

export default AddColleaguePage;
