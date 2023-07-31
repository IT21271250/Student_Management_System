import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './App.css';
import StudentData from './Components/StudentData';
import AddStudent from "./Components/AddStudent";
import EditData from "./Components/EditData";

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

  const handleAddStudent = () => {
    setShowForm(!showForm);
  };

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


  return (
      <div className="container">
        <h4>Welcome to</h4>
        <h2>Student Management System</h2>
        <div className="addButton">
            <Button variant="secondary" className="btn-add" onClick={handleAddStudent}>
            Add Student
            </Button>
        </div>

      <StudentData data={student} handleEdit={handleEdit} handleDelete={handleDelete} />

      <Modal show={showForm} onHide={() => setShowForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddStudent onAddStudent={handleFormSubmit} />
        </Modal.Body>
      </Modal>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedStudent && <EditData studentData={selectedStudent} onUpdate={handleUpdate} />}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default App;