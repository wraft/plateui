/** @jsx jsx */
import { ThemeUIStyleObject, jsx } from 'theme-ui';

import { renderWithTheme } from 'tests/utils';
import { Table } from 'src';

const TableSample = {
  columns: [
    {
      Header: 'Id',
      accessor: 'col1', // accessor is the "key" in the data
      width: '15%',
    },
    {
      Header: 'Name',
      accessor: 'col2',
      width: '45%',
    },
    {
      Header: 'Updated',
      accessor: 'col3',
      width: '40%',
    },
  ],
  data: [
    {
      col1: 'A1',
      col2: 'A2',
      col3: 'A3',
    },
  ],
};

describe('components > Table', () => {
  it('renders as expected', () => {
    const content =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const { container } = renderWithTheme(<Table/>);
  });

});
