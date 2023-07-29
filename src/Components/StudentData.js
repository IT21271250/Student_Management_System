import React from "react";
import './StudentData.css'
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import DeleteButton from "./DeleteData";

const StudentData = ({ data, handleEdit, handleDelete }) => {

  return (
    <div>
        <Table className="table" striped="columns" >
        <thead className="thead-dark">
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Gender</th>
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
                <td>{item.Gender}</td>
                <td>
                <Button variant="outline-dark" className="btn-edit" onClick={() => handleEdit(item.id)}>
                    Edit
                  </Button>

                <DeleteButton id={item.id} onDelete={handleDelete} />
                </td>
            </tr>
            ))}
        </tbody>
        </Table>
    </div>
  );
};

export default StudentData;
