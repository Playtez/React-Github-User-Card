import React from 'react';
import { useTable } from 'react-table';
/**
 * As in the previous versions, a react-table accepts colums where at the core we have a field Header, and accessor
 * As in the previous versions, a react-table has data that consist of an array of JSONs
 */
export const ReactTable = ({ newData }: any) => {
  // console.log({ newData });

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
  // console.log({ dataStructure });
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
      <thead className='bg-blue-300'>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className='divide-x-2 divide-black '
          >
            {headerGroup.headers.map((column) => {
              const { render, getHeaderProps } = column;
              return (
                <th {...getHeaderProps()} className='bg-red-600 w-40'>
                  {render('Header')}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className='divide-y-2 divide-gray-500'>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className='divide-x-2 divide-gray-500 text-center'
            >
              {row.cells.map((cell) => {
                return (
                  <td id={`${i}`} {...cell.getCellProps()} className=''>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
