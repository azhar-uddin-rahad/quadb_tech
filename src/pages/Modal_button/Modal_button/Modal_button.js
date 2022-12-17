import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Modal_button = (categories) => {
  //console.log(categories.categories.name);
  const { name, language, premiered, genres, timezone } = categories.categories;
  console.log(name);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Booking Shows
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text"
                defaultValue={language}
                readOnly
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Premiered</Form.Label>
              <Form.Control
                type="text"
                defaultValue={premiered}
                readOnly
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>genres</Form.Label>
              <Form.Control
                type="text"
                defaultValue={genres}
                readOnly
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="text-center w-100"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Modal_button;
