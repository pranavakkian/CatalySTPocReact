import { useSelector } from 'react-redux';
import { memo } from 'react';
import {
  Header, Divider, Table,
} from 'semantic-ui-react';

const ViewColleague = memo(() => {
  const colleagueData = useSelector((state) => state.ColleagueReducer.data);
  const colleagueDataList = colleagueData.length ? (
    colleagueData.map((data) => (
      <Table.Row>
        <Table.Cell>{data.name}</Table.Cell>
        <Table.Cell>{data.jobTitle}</Table.Cell>
        <Table.Cell>{data.contact}</Table.Cell>
      </Table.Row>
    ))
  ) : (
    <Table.Cell>Data Not Available</Table.Cell>
  );
  return (
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
            {colleagueDataList }
          </Table.Body>
        </Table>
      </Header>
    </div>
  );
});

export default ViewColleague;
