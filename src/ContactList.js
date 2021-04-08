import React from "react";
import "./ContactList.css";

const ContactList = ({ contact, selectContact }) => {
  return (
    <div>
      {contact.map((c) => (
        <div
          key={c.id}
          className="list-item"
          onClick={() => selectContact(c.id - 1)}
        >
          <img
            src={require(`./images/${c.id}.jpg`).default}
            style={{ borderRadius: "10px", height: "64px", width: "64px" }}
          />
          <div className="item-text">{c.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
