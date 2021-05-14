/** @jsxRuntime classic /
/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, ThemeUIStyleObject, Text } from 'theme-ui';
import { PluginHook, useTable, UseTableOptions } from 'react-table';
export * from 'react-table';

const styles = {
  table: { borderCollapse: 'collapse', width: '100%' } as ThemeUIStyleObject,
  thead: { bg: 'highlight' } as ThemeUIStyleObject,
  tr: {
    bg: '#FAFAFA',
    borderBottom: '1px solid',
    borderBottomColor: 'highlight',
    '&:last-child': {
      border: '0',
    },
  } as ThemeUIStyleObject,
  th: { p: 3, textAlign: 'left', fontWeight: 'normal' } as ThemeUIStyleObject,
  td: { p: 3 } as ThemeUIStyleObject,
};

export interface TableProps {
  options: UseTableOptions<{}>;
  plugins?: PluginHook<{}>[];
}

const XTable = ({ options, plugins }: TableProps) => {
  const tableInstance = useTable(options, ...(plugins || []));

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <table {...getTableProps()} sx={styles.table}>
      <thead sx={styles.thead}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              const thSx = {
                ...styles.th,
                width: column.width,
                minWidth: column.minWidth,
                maxWidth: column.maxWidth,
              } as ThemeUIStyleObject;
              return (
                <th {...column.getHeaderProps()} sx={thSx}>
                  {column.render('Header')}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} sx={styles.tr}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} sx={styles.td}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const Table = () => {
  return(
    <Text>Hello</Text>
  )
}

Table.defaultProps = {
  plugins: [],
};

Table.displayName = 'Table';

export default Table;
