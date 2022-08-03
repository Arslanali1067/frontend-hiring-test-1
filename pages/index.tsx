import type { NextPage } from 'next';
import  React, { useState }  from 'react';
import 'antd/dist/antd.css';
import { PlusOutlined } from '@ant-design/icons';
// import { Table } from '../components/Table'
import { ColumnsType } from 'antd/es/table';
import { Table, Select, Modal, Input } from 'antd';


const Home: NextPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isViewDataModalVisible, setViewDataModalVisible] = useState(false);
  const { TextArea } = Input;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showDataModal = () => {
    setViewDataModalVisible(true);
  };

  const handleDataOk = () => {
    setViewDataModalVisible(false);
  };

  const handleDataCancel = () => {
    setViewDataModalVisible(false);
  };

  const { Option } = Select;
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

interface OptionProps {
  option: React.ElementType;
  
}

interface DataType {
  key: string;
  date: string;
  details: string;
  mark: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Date Created',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Call Details',
    dataIndex: 'details',
    key: 'details',
    render: text => <a onClick={showDataModal}>{text}</a>,
  },
  {
    title: 'Archive Call',
    dataIndex: 'mark',
    key: 'mark',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Add Note',
    key: 'action',
    render: (_, record) => (
      <>
            <a onClick={showModal}>
            <PlusOutlined /> Add Note 
            </a>
        </>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    date: '25 Aug, 2022',
    details: 'View Details',
    mark: 'Mark Archive',
  },
  {
    key: '2',
    date: '30 Aug, 2022',
    details: 'View Details',
    mark: 'Mark Archive',
  },
];
  return (

    <>
      <Select defaultValue="All Calls" style={{ width: 200, }} onChange={handleChange}>
      <Option value=" allCalls">All Calls</Option>
      <Option value="missedCalls">Missed Calls</Option>
      <Option value="archivedCalls">Archived Calls</Option>
      </Select>
      <Table  columns={columns} dataSource={data} />
      <Modal title="Add Note" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <TextArea rows={4} />
      </Modal>
      <Modal title="Add Note" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <TextArea rows={4} />
      </Modal>
      <Modal title="Call Details" visible={isViewDataModalVisible} onOk={handleDataOk} onCancel={handleDataCancel}>
      <p>Call Details will display here</p>
      </Modal>
    </>
      
  )
}

export default Home
