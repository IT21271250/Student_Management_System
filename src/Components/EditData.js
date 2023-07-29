import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import './EditData.css';

const EditData = ({ studentData, onUpdate }) => {
  const [formData, setFormData] = useState(studentData);
  const [phoneError, setPhoneError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(phoneError === "");
  }, [formData, phoneError]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(value)) {
          setPhoneError("Phone number must be 10 digits");
        } else {
          setPhoneError("");
        }
      }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneError !== "") {
        return;
      }

    onUpdate(formData);
  };

  return (
    <div className="addStudent">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formId">
          <Form.Label>ID :</Form.Label>
          <Form.Control type="text" name="id" value={formData.id} readOnly />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>Name :</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number :</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={phoneError !== ""}
          />
          <Form.Control.Feedback type="invalid">{phoneError}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address :</Form.Label>
          <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formGender">
          <Form.Label>Gender :</Form.Label>
          <Form.Control as="select" name="Gender" value={formData.Gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>

        <Button className="update" variant="primary" type="submit" disabled={!isFormValid}>
          Update
        </Button>
      </Form>
      </div>
  );
};

export default EditData;