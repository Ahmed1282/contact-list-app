import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Contacts from './Contacts';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Contact List</h1>
      <hr />
      <Contacts users={users} />
    </div>
  );
}

export default App;
