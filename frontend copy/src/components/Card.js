import React from 'react';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import './Card.css';

function Card(props) {
  const { employee } = props;

  return (
    <div className='the-card'>
      <div className="employee-details">
        <h4>{employee.name}</h4>
        <small>{employee.occupation}</small>
        <p><IoCall className="the-contact-icon" /> {employee.cell}</p>
        <p><MdEmail className="the-contact-icon-two" /><br /> {employee.email}</p>
      </div>
    </div>
  );
}

export default Card;
