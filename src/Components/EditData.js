import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import "./EditData.css";

const { Option } = Select;

const EditData = ({ studentData, onUpdate }) => {
  const [form] = Form.useForm();
  const [phoneError, setPhoneError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(phoneError === "");
  }, [phoneError]);

  const handleChange = (changedValues, allValues) => {
    const { phone } = allValues;

    if (phone) {
      const phonePattern = /^\d{10}$/;
      if (!phonePattern.test(phone)) {
        setPhoneError("Phone number must be 10 digits");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleSubmit = (values) => {
    if (phoneError !== "") {
      return;
    }

    onUpdate(values);
  };

  return (
    <div className="addStudent">
      <Form form={form} initialValues={studentData} onFinish={handleSubmit} onValuesChange={handleChange}>
        <Form.Item label="ID :" name="id">
          <Input readOnly />
        </Form.Item>

        <Form.Item label="Name :" name="name" rules={[{ required: true, message: "Please input the name!" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number :"
          name="phone"
          rules={[
            { required: true, message: "Please input the phone number!" },
            { pattern: /^\d{10}$/, message: "Phone number must be 10 digits" },
          ]}
        >
          <Input />
        </Form.Item>
        {phoneError && <Form.Item><span className="ant-form-item-explain ant-form-item-explain-error">{phoneError}</span></Form.Item>}

        <Form.Item label="Address :" name="address" rules={[{ required: true, message: "Please input the address!" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Gender :" name="Gender" rules={[{ required: true, message: "Please select a gender!" }]}>
          <Select>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button className="update" type="primary" htmlType="submit" disabled={!isFormValid}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditData;