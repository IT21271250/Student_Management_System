import React from "react";
import './StudentData.css'
import { Table, Button } from "antd";
import DeleteButton from "./DeleteData";

const StudentData = ({ data, handleEdit, handleDelete }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      key: "Gender",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <span>
          <Button type="primary" ghost onClick={() => handleEdit(record.id)}>
            Edit
          </Button>
          <DeleteButton id={record.id} onDelete={handleDelete} />
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} bordered />
    </div>
  );
};

export default StudentData;
