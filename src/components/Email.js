import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as emailjs from "emailjs-com";

const Email = (props) => {
  const { handleClose, show } = props;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Mike",
      subject,
      message: message,
    };

    debugger
    emailjs.send(
      "service_v6t1kuu",
      "template_vn8iav9",
      templateParams,
      "user_cNb6NK6Islti3bT9dVoCG"
    );
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal backdrop="static" show={show}>
        <Modal.Header>
          <Modal.Title>Send me an email...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Form.Control
              name="email"
              type="email"
              placeholder="email@email.com"
              value={formData.email}
              onChange={handleChange}
            />
            <Form.Control
              name="subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <Form.Control
              name="message"
              type="text"
              placeholder="Tell me about..."
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" variant="primary" onClick={handleClose}>
              Send Email
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Email;
