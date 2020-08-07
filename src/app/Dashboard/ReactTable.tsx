import React from 'react';
import { useTable } from 'react-table';
/**
 * As in the previous versions, a react-table accepts colums where at the core we have a field Header, and accessor
 * As in the previous versions, a react-table has data that consist of an array of JSONs
 */
export const ReactTable = ({ newData }: any) => {
  console.log({ newData });

  const dataStructure = newData.map((user: any) => {
    return {
      col1: user.name,
      col2: user.height,
      col3: user.mass,
    };
  });

  const data = React.useMemo(() => dataStructure, [dataStructure]);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Height',
        accessor: 'col2',
      },
      {
        Header: 'Mass',
        accessor: 'col3',
      },
    ],
    []
  );
  console.log({ dataStructure });
  // you can get the react table functions by using the hook useTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              const { render, getHeaderProps } = column;
              return <th {...getHeaderProps()}>{render('Header')}</th>;
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
