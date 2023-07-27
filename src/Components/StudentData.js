import React from "react";
import './StudentData.css'
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const StudentData = ({ data }) => {
    const handleEdit = (id) => {
        console.log(`Edit clicked for ID: ${id}`);
      };
    
      const handleDelete = (id) => {
        console.log(`Delete clicked for ID: ${id}`);
      };

  return (
    <div>
        <Table className="table" striped="columns" >
        <thead className="thead-dark">
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                <Button variant="outline-dark"
                    className="btn-edit"
                    onClick={() => handleEdit(item.id)}
                >Edit</Button>

                <Button variant="outline-danger"
                    className="btn-delete"
                    onClick={() => handleDelete(item.id)}
                >
                Delete</Button>

                </td>
            </tr>
            ))}
        </tbody>
        </Table>
    </div>
  );
};

export default StudentData;
