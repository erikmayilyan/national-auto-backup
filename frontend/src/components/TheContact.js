import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { IoCall } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
import Up from './Up';
import axios from "axios";
import "./TheContact.css";

function TheContact() {
  const [employees, setEmployees] = useState([]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [modal, setModal] = useState(false);
  const [theMessage, setTheMessage] = useState('');
  const [error, setError] = useState('');

  const onChangeFullName = (event) => {
    setFullName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const onChangeTheMessage = (event) => {
    setTheMessage(event.target.value);
  };

  const toggleModal = () => {
    setModal(!modal);
    console.log(error);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const formData = {
      fullName,
      email,
      phone,
      theMessage
    };

    console.log("Form Data: ", formData);

    toggleModal();

    fetch(`http://localhost:5102/contactPage`, {
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
      setPhone('');
      setTheMessage('');
    })
  };

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5102/the-team-members');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching team members:', error);
        setError('Failed to fetch team members. Please try again!');
      }
    };
    fetchTeamMembers();
  }, []);

  const theMembers = [
    {
      "_id": "6669b0f63d161ada83b76041",
      "name": "Taron Piloyan",
      "occupation": "Owner/Sales Manager",
      "cell": "818.445.1062",
      "email": "taron@nationalautola.com",
      "__v": 0
    },
    {
      "_id": "6669d0ff936f97b9b6ccba72",
      "name": "Edgar Piloyan",
      "occupation": "Sales Manager",
      "cell": "818.200.3896",
      "email": "edgar@nationalautola.com",
      "__v": 0
    },
    {
      "_id": "6669d138936f97b9b6ccba76",
      "name": "Garen Tagachyan",
      "occupation": "Sales Manager",
      "cell": "818.404.3570",
      "email": "garen@nationalautola.com",
      "__v": 0
    },
    {
      "_id": "6669d159936f97b9b6ccba7a",
      "name": "Adriana Navaro",
      "occupation": "Sales Manager (Se habla Espanol)",
      "cell": "310.927.8297",
      "email": "adriana@nationalautola.com",
      "__v": 0
    },
    {
      "_id": "6669d199936f97b9b6ccba80",
      "name": "Arthur Matevosyan",
      "occupation": "Sales Manager",
      "cell": "818.257.8888",
      "email": "arthur@nationalautola.com",
      "__v": 0
    },
    {
      "_id": "6669d1d0936f97b9b6ccba86",
      "name": "Narek Petrosian",
      "occupation": "Sales Manager",
      "cell": "818.568.6049",
      "email": "narek@nationalautola.com",
      "__v": 0
    },
    {
      "_id": "666ac469936f97b9b6ccba97",
      "name": "Narek \"Nick\" Nazaryan",
      "occupation": "Sales Manager",
      "cell": "818.213.9922",
      "email": "nick@nationalautola.com",
      "__v": 0
    }
  ];  

  const handleCallClick = () => {
    window.location.href = "tel:+18189575700"; 
  };

  return (
    <div className="contacts">
      <div className="the-home-page">
        <div className="navbar-container">
          <div className="navbar-inner">
            <div className="navbar-content">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <div className="contacthero container">
        <div className="contacthero-text">
          <h1>CONTACT US TODAY</h1>
          <p>We're situated at 1358 East Colorado St. Unit B, Glendale, CA 91205. Feel free to reach out to us via email at info@nationalautola.com for any inquiries or questions.</p>
          <button className="reviewbtn" onClick={handleCallClick}><IoCall className="the-contact-call" /> CALL US TODAY</button>
        </div>
      </div>
      <div className="employees">
        <h3 className="section-title">CONTACT TEAM</h3>
        <div className="employee-carousel">
          <div className="employee-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {theMembers.map(employee => (
              <Card key={employee.id} employee={employee}/>
            ))}
          </div>
        </div>
      </div>
      <div className="map-container">
        <div className="map-contact-info">
          <form onSubmit={submitForm}>
            <h3>CONTACT US</h3>
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
              <Col className="form-details">
                <input 
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={onChangePhone}
                  type="number"
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
                  value={theMessage}
                  onChange={onChangeTheMessage}
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
        </div>
        <div className="the-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.6331064936053!2d-118.23525729999999!3d34.1425586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ea6cfa1d073f%3A0xf3c29a213e8adfb1!2sNational%20Auto%20Leasing%20and%20Sales!5e1!3m2!1sde!2sch!4v1717935742276!5m2!1sde!2sch" 
            max-width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <Footer />
      <Up />
    </div>
  );
}

export default TheContact;
