// import { TableProps } from '.';
import { Table } from 'antd';
import { TableProps } from '../../types';
import styled from 'styled-components';

export const StyledTable = styled((props: TableProps) => {
  return <Table />;
})`
  width: 100%;
  .ant-table-cell {
    white-space: nowrap;
  }
  .ant-table-wra0pper {
    overflow: hidden;
  }
  .ant-table table {
    border-spacing: 0 8px;
  }
`;
