import React, {useState, useEffect} from 'react';
import { Button, Modal } from "antd";
import './App.css';
import StudentData from './Components/StudentData';
import AddStudent from "./Components/AddStudent";
import EditData from "./Components/EditData";
import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: "http://localhost:3004",
  timeout: 10000
});

const App = () => {
  const [student, setStudent] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    try {
      const response = await axiosInstance.get('/students');
      setStudent(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddStudent = () => {
    setShowForm(true);
  };

  // const handleDelete = (id) => {
  //   setStudent((prevStudent) => prevStudent.filter((item) => item.id !== id));
  // };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/students/${id}`);
      setStudent((prevStudent) => prevStudent.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  // const handleFormSubmit = (newStudentData) => {
  //   const newStudent = { ...newStudentData, id: student.length + 1 };
  //   setStudent((prevStudent) => [...prevStudent, newStudent]);
  //   setShowForm(false);
  // };

  const handleFormSubmit = async (newStudentData) => {
    try {
      const response = await axiosInstance.post('/students/add', newStudentData);
      const newStudent = { ...response.data, id: student.length + 1 };
      setStudent((prevStudent) => [...prevStudent, newStudent]);
      setShowForm(false);
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const handleEdit = (id) => {
    const studentToEdit = student.find((item) => item.id === id);
    setSelectedStudent(studentToEdit);
    setShowEditModal(true);
  };

  // const handleUpdate = (updatedStudentData) => {
  //   setStudent((prevStudent) =>
  //     prevStudent.map((item) => (item.id === updatedStudentData.id ? updatedStudentData : item))
  //   );
  //   setShowEditModal(false);
  // };

  const handleUpdate = async (updatedStudentData) => {
    try {
      await axiosInstance.put(`students/${updatedStudentData.id}`, updatedStudentData);
      setStudent((prevStudent) =>
        prevStudent.map((item) => (item.id === updatedStudentData.id ? updatedStudentData : item))
      );
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
      <div className="container">
        <h4>Welcome to</h4>
        <h2>Student Management System</h2>
        <div className="addButton">
        <Button type="primary" className="btn-add" onClick={handleAddStudent}>
          Add Student
        </Button>
        </div>

      <StudentData data={student} handleEdit={handleEdit} handleDelete={handleDelete} />

      <Modal
        title="Add Student"
        visible={showForm}
        onCancel={() => setShowForm(false)}
        footer={null}
      >
        <AddStudent onAddStudent={handleFormSubmit} />
      </Modal>

      <Modal
        title="Edit Student Data"
        visible={showEditModal}
        onCancel={() => setShowEditModal(false)}
        footer={null}
      >
        {selectedStudent && <EditData studentData={selectedStudent} onUpdate={handleUpdate} />}
      </Modal>
      
    </div>
  );
};

export default App;