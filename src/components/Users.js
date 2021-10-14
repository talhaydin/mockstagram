import React from 'react';
import { useState, useEffect } from 'react';
import './Users.scss';
import { Link } from 'react-router-dom';

function Users({ match }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://dummyapi.io/data/v1/user?limit=10', {
      headers: {
        'app-id': '6166fd506281a5754336756e',
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data.data)); //this part is data.data because the array has data array inside of its array.
  }, []);

  return (
    <div className="userContainer">
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <div className="userCards" key={user.id}>
            <img
              src={user.picture}
              className="userPicture"
              alt="user profile pic"
            />
            <h4>
              {' '}
              {user.title.toUpperCase()}. {user.firstName} {user.lastName}
            </h4>
            <h4>{user.id}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Users;
