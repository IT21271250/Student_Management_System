import React,{useState} from "react";
import { Button } from "antd";
import DeleteConfirm from "./DeleteConfirm";

const DeleteButton = ({ id, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    onDelete(id);
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
      <>
        <Button danger className="btn-delete" onClick={handleShowModal}>
          Delete
        </Button>
        <DeleteConfirm show={showModal} onClose={handleCloseModal} onConfirm={handleDelete} userID={id}/>
      </>
    );
};

export default DeleteButton;
