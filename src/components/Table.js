
import { Cell, Column, HeaderCell, Table } from 'rsuite-table';
import userData from '../users.json';
import 'rsuite-table/dist/css/rsuite-table.css';

export default function Tables() {
  

  const ImageCell = ({ rowData, dataKey, ...rest }) => (
    <Cell {...rest}>
      <img src={rowData[dataKey]} />
    </Cell>
  );

  return (
    <Table data={userData}>
      <Column>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey='first_name' />
      </Column>
      <Column>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey='last_name' />
      </Column>
      <Column>
        <HeaderCell>Avatar</HeaderCell>
        <ImageCell dataKey='image' />
      </Column>           
      <Column>
        <HeaderCell>Favorite Color</HeaderCell>
        <Cell dataKey='favorite_color' />
      </Column>      
    </Table>
  );
}