import React from 'react';
import { jsx, ThemeUIStyleObject, Box } from 'theme-ui';
import { PluginHook, useTable, UseTableOptions } from 'react-table';
// export * from 'react-table';

const styles = {
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid',
    borderColor: 'gray.3',
    textAlign: 'left',
  } as ThemeUIStyleObject,
  thead: {
    bg: 'gray.0',
    fontSize: 0,
    textTransform: 'uppercase',
    border: '1px solid',
    borderColor: 'gray.3',
    color: 'gray.6',
  } as ThemeUIStyleObject,
  tr: {
    verticalAlign: 'top',
    bg: 'gray.0',
    borderBottom: '1px solid',
    borderBottomColor: 'gray.2',
    '&:last-child': {
      border: '0',
    },
    '&:hover': {
      bg: 'gray.1',
    },
  },
  th: { p: 2, textAlign: 'left', fontWeight: 'normal' },
  td: { p: 2 },
};

export interface TableProps {
  options: UseTableOptions<Record<string, unknown>>;
  plugins?: PluginHook<Record<string, unknown>>[];
}

// eslint-disable-next-line react/prop-types
const Tablex: React.FunctionComponent<TableProps> = ({ options, plugins }: TableProps) => {
  const tableInstance = useTable(options, ...(plugins || []));
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <Box as="table" {...getTableProps()} sx={styles.table}>
      <Box as="thead" sx={styles.thead}>
        {headerGroups.map((headerGroup) => (
          <Box as="tr" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              const thSx = {
                ...styles.th,
                width: column.width,
                minWidth: column.minWidth,
                maxWidth: column.maxWidth,
              } as ThemeUIStyleObject;
              return (
                <Box as="th" {...column.getHeaderProps()} sx={thSx}>
                  {column.render('Header')}
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
      <Box as="tbody" {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Box as="tr" {...row.getRowProps()} sx={styles.tr}>
              {row.cells.map((cell) => (
                <Box as="th" {...cell.getCellProps()} sx={styles.td}>
                  {cell.render('Cell')}
                </Box>
              ))}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Tablex;
