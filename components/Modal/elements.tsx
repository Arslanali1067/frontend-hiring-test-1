import { ModalProps } from '../../types';
import { Modal } from 'antd';
import styled from 'styled-components';

export const StyledModal = styled((props: ModalProps) => {
  return <Modal {...props} />;
})`
  overflow: none;
  transform: none;
  .ant-modal-title {
    font-size: 20px;
    line-height: 28px;
  }
`;
