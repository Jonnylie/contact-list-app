import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faPhoneAlt,
  faCommentDots,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./ContactDetail.css";

const ContactDetail = ({ removeContact, contact }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{ color: "white" }}
        size="lg"
        onClick={removeContact}
      />
      <div className="info-container">
        <div className="top-box">
          <img
            src={require(`../images/${contact.id}.jpg`).default}
            className="circle-image"
            alt={contact.name}
          />
          <div className="contact-name">{contact.name}</div>
          <div className="contact-email">{contact.email}</div>
          <div className="grid-column">
            <div className="info-column">
              <div className="label">Phone</div>
              <div className="info-text">{contact.phone}</div>
            </div>
            <div className="vertical-line"></div>
            <div className="info-column">
              <div className="label">Company</div>
              <div className="info-text">{contact.company.name}</div>
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="contact-icon"
              style={{
                backgroundColor: "#6c5aee",
              }}
            />
            <FontAwesomeIcon
              icon={faCommentDots}
              className="contact-icon"
              style={{
                backgroundColor: "#068efe",
              }}
            />
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="contact-icon"
              style={{
                backgroundColor: "#53d575",
              }}
            />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="label">Address</div>
        <div className="bottom-text">
          {contact.address.suite}, {contact.address.street}
        </div>
      </div>
      <div className="wrapper">
        <div className="label">Zip code</div>
        <div className="bottom-text">{contact.address.zipcode}</div>
      </div>
      <div className="wrapper">
        <div className="label">City</div>
        <div className="bottom-text">{contact.address.city}</div>
      </div>
    </div>
  );
};

export default ContactDetail;
