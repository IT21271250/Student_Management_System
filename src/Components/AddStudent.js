import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './AddStudent.css';

const AddStudent = ({ onAddStudent }) => {
  const initialFormState = {
    id: "",
    name: "",
    phone: "",
    address: "",
    Gender: "",
  };

  const [newStudentData, setNewStudentData] = useState(initialFormState);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(newStudentData.phone)) {
      alert("Invalid phone number. Please enter Correct one");
      return;
    }
    onAddStudent(newStudentData);
    setNewStudentData(initialFormState);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name :</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={newStudentData.name}
          onChange={handleFormChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone Number :</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={newStudentData.phone}
          onChange={handleFormChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address :</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={newStudentData.address}
          onChange={handleFormChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="Gender">
        <Form.Label>Gender :</Form.Label>
        <Form.Control
          as="select"
          name="Gender"
          value={newStudentData.Gender}
          onChange={handleFormChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Control>
      </Form.Group>
      <Button className="add-student" type="submit" variant="primary">
        Add Student
      </Button>
    </Form>
  );
};

export default AddStudent;