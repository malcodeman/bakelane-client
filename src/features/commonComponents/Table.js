import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  table-layout: fixed;
`;

const TableHead = styled.th`
  padding: 1rem;
  text-align: left;
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
  border-bottom: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.tableHeadBackgroundColor};
  &:first-of-type {
    border-top-left-radius: ${props => props.theme.borderRadius};
  }
  &:last-of-type {
    border-top-right-radius: ${props => props.theme.borderRadius};
  }
`;

const TableData = styled.td`
  padding: 1rem;
  text-align: left;
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
  border-bottom: 1px solid ${props => props.theme.border};
`;

function Table(props) {
  const { bordered, columns, dataSource } = props;

  return (
    <StyledTable bordered={bordered}>
      <thead>
        <tr>
          {columns.map(column => {
            return <TableHead key={column.key}>{column.title}</TableHead>;
          })}
        </tr>
      </thead>
      <tbody>
        {dataSource.map(data => {
          return (
            <tr key={data.id}>
              {columns.map(column => {
                if (column && column.render) {
                  return (
                    <TableData key={column.dataIndex}>
                      {column && column.render(data)}
                    </TableData>
                  );
                }
                return (
                  <TableData key={column.dataIndex}>
                    {data[column.dataIndex]}
                  </TableData>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
}

Table.propTypes = {
  bordered: PropTypes.bool,
  dataSource: PropTypes.array,
  columns: PropTypes.array
};

Table.defaultProps = {
  bordered: false,
  dataSource: [],
  columns: []
};

export default Table;
