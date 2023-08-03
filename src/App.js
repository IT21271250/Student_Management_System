import React, {useState} from 'react';
import { Button, Modal } from "antd";
import './App.css';
import StudentData from './Components/StudentData';
import AddStudent from "./Components/AddStudent";
import EditData from "./Components/EditData";
// import axios from 'axios';

const App = () => {
  const dataArray = [
      {
        id: 1,
        name: "John Doe",
        phone: "1234567890",
        address: "123, Main Street",
        Gender: "Male"
      },
      {
        id: 2,
        name: "Jane Smith",
        phone: "9876543210",
        address: "456, Elm Avenue",
        Gender: "Male"
      },
      {
        id: 3,
        name: "Bob Johnson",
        phone: "5551234567",
        address: "789, Oak Road",
        Gender: "Male"
      },
      {
        id: 4,
        name: "Alice Brown",
        phone: "4445556666",
        address: "321, Pine Lane",
        Gender: "Male"
      },
      {
        id: 5,
        name: "Michael Lee",
        phone: "7778889999",
        address: "555, Cedar Street",
        Gender: "Male"
      },
      {
        id: 6,
        name: "Sarah Adams",
        phone: "2223334444",
        address: "999, Birch Avenue",
        Gender: "Female"
      },
      {
        id: 7,
        name: "David Wilson",
        phone: "1112223333",
        address: "444, Maple Drive",
        Gender: "Male"
      },
      {
        id: 8,
        name: "Karen Brown",
        phone: "6667778888",
        address: "777, Oak Lane",
        Gender: "Male"
      },
      {
        id: 9,
        name: "Chris Evans",
        phone: "8889990000",
        address: "111, Pine Avenue",
        Gender: "Male"
      },
      {
        id: 10,
        name: "Emily Taylor",
        phone: "3334445555",
        address: "222, Elm Street",
        Gender: "Female"
      }
    ];

  const [student, setStudent] = useState(dataArray);
  const [showForm, setShowForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // useEffect(() => {
  //   fetchStudentData();
  // }, []);

  // const fetchStudentData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/student');
  //     setStudent(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const handleAddStudent = () => {
    setShowForm(true);
  };

  // const handleAddStudent = async (newStudentData) => {
  //   try {
  //     const response = await axios.post('http://localhost:3000/student', newStudentData);
  //     const newStudent = { ...response.data, id: student.length + 1 };
  //     setStudent((prevStudent) => [...prevStudent, newStudent]);
  //     setShowForm(false);
  //   } catch (error) {
  //     console.error('Error adding student:', error);
  //   }
  // };

  const handleDelete = (id) => {
    setStudent((prevStudent) => prevStudent.filter((item) => item.id !== id));
  };

  const handleFormSubmit = (newStudentData) => {
    const newStudent = { ...newStudentData, id: student.length + 1 };
    setStudent((prevStudent) => [...prevStudent, newStudent]);
    setShowForm(false);
  };

  const handleEdit = (id) => {
    const studentToEdit = student.find((item) => item.id === id);
    setSelectedStudent(studentToEdit);
    setShowEditModal(true);
  };

  const handleUpdate = (updatedStudentData) => {
    setStudent((prevStudent) =>
      prevStudent.map((item) => (item.id === updatedStudentData.id ? updatedStudentData : item))
    );
    setShowEditModal(false);
  };

  // const handleUpdate = async (updatedStudentData) => {
  //   try {
  //     await axios.put(`http://localhost:students/${updatedStudentData.id}`, updatedStudentData);
  //     setStudent((prevStudent) =>
  //       prevStudent.map((item) => (item.id === updatedStudentData.id ? updatedStudentData : item))
  //     );
  //     setShowEditModal(false);
  //   } catch (error) {
  //     console.error('Error updating student:', error);
  //   }
  // };

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
