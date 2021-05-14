/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import React from 'react';
import { jsx, ThemeUIStyleObject } from 'theme-ui';
import { PluginHook, useTable, UseTableOptions } from 'react-table';
export * from 'react-table';

const styles = {
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid',
    borderColor: 'gray.3',
  } as ThemeUIStyleObject,
  thead: {
    bg: 'gray.0',
    fontSize: 0,
    textTransform: 'uppercase',
    border: '1px solid',
    borderColor: 'gray.3',
    color: 'gray.6',
  },
  tr: {
    verticalAlign: 'top',
    bg: 'gray.0',
    borderBottom: '1px solid',
    borderBottomColor: 'gray.2',
    '&:last-child': {
      border: '0',
    },
    '&:hover': {
      bg: 'gray.1'
    }
  },
  th: { p: 2, textAlign: 'left', fontWeight: 'normal' },
  td: { p: 2 },
};

export interface TableProps {
  options: UseTableOptions<{}>;
  plugins?: PluginHook<{}>[];
}

export const Table: React.FC<TableProps> = ({ options, plugins }) => {
  const tableInstance = useTable(options, ...(plugins || []));

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

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

Table.defaultProps = {
  plugins: [],
};
