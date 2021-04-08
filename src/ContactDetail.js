import React from "react";

const ContactDetail = ({removeContact}) => {
  return (
    <div>
        <button onClick={removeContact}/>
        <div>
            contact selected
        </div>
    </div>
  );
};

export default ContactDetail;
