import React from "react";
import { Button, Form, Input, Select } from "antd";
import "./AddStudent.css";

const { Option } = Select;

const AddStudent = ({ onAddStudent }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = (values) => {
    if (!/^\d{10}$/.test(values.phone)) {
      alert("Invalid phone number. Please enter a correct one.");
      return;
    }
    onAddStudent(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleFormSubmit}>
      <Form.Item label="Name :" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number :"
        name="phone"
        rules={[
          { required: true, message: "Please input your phone number!" },
          { pattern: /^\d{10}$/, message: "Invalid phone number. Please enter a correct one." },
        ]}
      >
        <Input type="tel" />
      </Form.Item>
      <Form.Item label="Address :" name="address" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Gender :" name="Gender" rules={[{ required: true }]}>
        <Select>
          <Option value="">Select Gender</Option>
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button className="add-student" type="primary" htmlType="submit">
          Add Student
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddStudent;