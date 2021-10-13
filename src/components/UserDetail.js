import React from 'react';
import { useState, useEffect } from 'react';

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
    <div className="">
      <h1>Ben</h1>
      <h2>{user.firstName}</h2>
    </div>
  );
}

export default UserDetail;
