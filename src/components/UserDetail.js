import React from 'react';
import { useState, useEffect } from 'react';
import './UserDetail.scss';

function UserDetail({ match }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/user/${match.params.id}`, {
      headers: {
        'app-id': '6166fd506281a5754336756e',
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  console.log(user);

  return (
    <div className="detailContainer">
      <div className="userCard">
        <div>
          <img src={user.picture} alt="user pic" />
        </div>
        <div>
          <h3>
            {user.title}. {user.firstName} {user.lastName}
          </h3>
          <h4>Gender: {user.gender}</h4>
          <h4>Date of Birth: {user.dateOfBirth}</h4>
          <h4>Register Date: {user.registerDate}</h4>
          <h4>Email Adress: {user.email}</h4>
          <h4>Phone: {user.phone}</h4>
        </div>
        <div>
          <div className="mockMap">Map here</div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
