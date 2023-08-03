import React from "react";
import { Modal, Button } from 'antd';

const DeleteConfirm = ({ show, onClose, onConfirm, userID }) => {

      return (
        <Modal
          visible={show}
          onCancel={onClose}
          centered
          footer={[
            <Button key="cancel" onClick={onClose}>
              Cancel
            </Button>,
            <Button key="delete" type="primary" danger onClick={onConfirm}>
              Delete
            </Button>,
          ]}
        >
          <h2>Delete Confirmation</h2>
          <p>Are you sure to delete user {userID}?</p>
        </Modal>
  );
};

export default DeleteConfirm;
