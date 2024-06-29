import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import "./Contact.css";

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modal, setModal] = useState('');

  const onChangeFullName = (event) => {
    setFullName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const toggleModal = () => {
    setModal(!modal);
  };
  
  const onSubmitForm = (event) => {
    event.preventDefault();

    const formData = {
      fullName,
      email,
      message
    };

    console.log("Form Data: ", formData);

    toggleModal();

    fetch('https://national-auto-backup-frontend.onrender.com/contactHome', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(response => {
      console.log("response", response);
      return response.json();
    }).then(data => {
      console.log("Data: ", data);
      setFullName('');
      setEmail('');
      setMessage('');
    });
  };

  return (
    <Container className="contact-container">
      <Row className="row-element">
        <Col className="col-element">
          <h1 className="contact-title">CONTACT US</h1>
        </Col>
      </Row>
      <Row className="contact-second">
        <Col lg={6} className="col-contact first">
          <h3 className="contact-col-title">Contact Information</h3>
          <address>
            <p>Address: 1358 E. Colorado St., Unit B <br /> Glendale, CA 91205</p>
            <p>Email: info@NationalAutoLa.com</p>
            <p>Phone: 818.957.5700</p>
            <p>Fax: 818.957.1614</p>
          </address>
        </Col>
        <Col lg={6} className="the-form first">
          <form onSubmit={onSubmitForm}>
            <Row>
              <Col className="form-details">
                <input 
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Full name"
                  value={fullName}
                  onChange={onChangeFullName}
                  type="text"
                />
              </Col>
            </Row>
            <Row>
              <Col className="form-details">
                <input 
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={onChangeEmail}
                  type="email"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <textarea 
                  className="form-control form-textarea" 
                  id="message" 
                  name="message" 
                  placeholder="Message" 
                  value={message}
                  onChange={onChangeMessage}
                  rows='5'
                ></textarea>
              </Col>
            </Row>
            <Row>
              <Col>
                <button className="the-submit">Submit</button>
              </Col>
            </Row>
            {modal && (
              <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                  <div className="check-mark">
                    <IoCheckmarkDoneSharp />
                  </div>
                  <h2>Form Submitted!</h2>
                  <p>Thank you for submitting the inquiry. The request will be reviwed by our administration and we will contact you regarding the further steps!</p>
                  <a href="#" className="close-modal" onClick={toggleModal}>
                    <IoMdClose />
                  </a>
                </div>
              </div>
            )}
          </form>
        </Col>
      </Row>
    </Container>
  )
};

export default Contact;
