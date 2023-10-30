import React from 'react';
import './styles.css'; // Import your CSS file

const AvatarBaseUrl = 'https://api.dicebear.com/7.x/adventurer/svg?seed=';

const Contacts = ({ users }) => {
  return (
    <div className="contacts">
      {users.map(user => (
        <div key={user.id} className="contact-card">
          <div className="avatar">
            <img
              src={`${AvatarBaseUrl}${user.name.charAt(0)}`}
              alt={`${user.name}'s Avatar`}
              style={{ width: '50px', height: '50px' }} // Set width and height here
            />
          </div>
          <div className="contact-info">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Catchphrase: {user.company.catchPhrase}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
