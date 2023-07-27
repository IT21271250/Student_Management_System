import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import StudentData from './Components/StudentData';

const App = () => {
  const dataArray = [
      {
        id: 1,
        name: "John Doe",
        phone: "123-456-7890",
        address: "123, Main Street"
      },
      {
        id: 2,
        name: "Jane Smith",
        phone: "987-654-3210",
        address: "456, Elm Avenue"
      },
      {
        id: 3,
        name: "Bob Johnson",
        phone: "555-123-4567",
        address: "789, Oak Road"
      },
      {
        id: 4,
        name: "Alice Brown",
        phone: "444-555-6666",
        address: "321, Pine Lane"
      },
      {
        id: 5,
        name: "Michael Lee",
        phone: "777-888-9999",
        address: "555, Cedar Street"
      },
      {
        id: 6,
        name: "Sarah Adams",
        phone: "222-333-4444",
        address: "999, Birch Avenue"
      },
      {
        id: 7,
        name: "David Wilson",
        phone: "111-222-3333",
        address: "444, Maple Drive"
      },
      {
        id: 8,
        name: "Karen Brown",
        phone: "666-777-8888",
        address: "777, Oak Lane"
      },
      {
        id: 9,
        name: "Chris Evans",
        phone: "888-999-0000",
        address: "111, Pine Avenue"
      },
      {
        id: 10,
        name: "Emily Taylor",
        phone: "333-444-5555",
        address: "222, Elm Street"
      }
    ];

    const [student, setStudent] = useState(dataArray);
    
  return (
    <div className="container">
      <h4>Welcome to</h4>
      <h2>Student Management System</h2>
      <div className="addButton">
        <Button variant="secondary" className="btn-add">
              Add Student
            </Button>
        </div>
      <StudentData data={student}/>
    </div>
  );
};

export default App;
