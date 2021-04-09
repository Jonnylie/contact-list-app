import React from "react";
import "./ContactList.css";

const ContactList = ({ contact, selectContact }) => {
  return (
    <div>
      {contact.map((c) => (
        <div
          key={c.id}
          className="list-item"
          onClick={() => selectContact(c.id - 1)} // use contact id as a key for selectContact function
        >
          <img
            src={require(`../images/${c.id}.jpg`).default}
            className="photograph"
          />
          <div className="item-text">{c.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
