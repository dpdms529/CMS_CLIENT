import React from "react";
import { Modal } from "react-bootstrap";

const CustomModal = ({ dialogClassName, show, onHide, title, content }) => {
    return (
        <Modal dialogClassName={dialogClassName} show={show} onHide={onHide} backdrop="static" size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
        </Modal>
    );
};

export default CustomModal;
