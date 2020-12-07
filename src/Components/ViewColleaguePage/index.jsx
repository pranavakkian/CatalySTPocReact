import { memo } from 'react';
import {
  Header, Divider, Table,
} from 'semantic-ui-react';

const ViewColleague = memo(() => (
  <div>
    <Header as="h1" textAlign="center">
      Colleague Information
      <Divider />
      <Table compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employee</Table.HeaderCell>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Contact</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>--</Table.Cell>
            <Table.Cell>--</Table.Cell>
            <Table.Cell>--</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Header>
  </div>
));

export default ViewColleague;
