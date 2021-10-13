import React from 'react';
import { useState, useEffect } from 'react';
import './Users.scss';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://dummyapi.io/data/v1/user?limit=10', {
      headers: {
        'app-id': '6166fd506281a5754336756e',
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  }, []);
  console.log(users);

  return (
    <div className="userContainer">
      {users.map((user) => (
        <div className="userCards" key={user.id}>
          <img
            src={user.picture}
            className="userPicture"
            alt="user profile pic"
          />
          <h4>
            {user.title.toUpperCase()}. {user.firstName} {user.lastName}
          </h4>
          <h4>{user.id}</h4>
        </div>
      ))}
    </div>
  );
}

export default Users;
