/** @jsxRuntime classic /
/** @jsx jsx */
import React from 'react';
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

const TableWrap = () => {
  return(
    <Text>Table</Text>
  )
}

TableWrap.defaultProps = {
  // plugins: [],
};

TableWrap.displayName = 'Table';

export default TableWrap;
