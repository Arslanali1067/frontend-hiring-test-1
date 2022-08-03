import { Any, SelectProps } from '../../types';
import { Select } from 'antd';
import styled from 'styled-components';

export const StyledSelect = styled((props: SelectProps<Any>) => (
  <Select {...props} />
))`
  border-radius: 3px;
  text-align: left;

  width: 100%;

`;
