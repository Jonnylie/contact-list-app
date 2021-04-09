import React, { useState, useEffect } from "react";
import ContactList from "./ContactList/ContactList";
import ContactDetail from "./ContactDetail/ContactDetail";
import axios from "axios";
import "./App.css";

const App = () => {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState();
  const [error, setError] = useState(false);

  const selectContact = (id) => {
    setSelectedContact(contact[id]);
  };

  const removeContact = () => {
    setSelectedContact(null);
  };

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        cancelToken: new axios.CancelToken((c) => (cancel = c)), // set cancel variable everytime axios make a call
      })
      .then((res) => {
        setLoading(false);
        setContact(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });

    return () => cancel(); // cancel old request when we make a new request
  }, []);

  if (loading) return "Loading...";
  if (error) return error;

  return (
    <div className="background">
      <div className="container">
        {selectedContact ? (
          <ContactDetail
            contact={selectedContact}
            removeContact={removeContact}
          />
        ) : (
          <ContactList contact={contact} selectContact={selectContact} />
        )}
      </div>
    </div>
  );
};

export default App;
