import React from 'react';
import { useState, useEffect } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyapi.io/data/v1/post?limit=10', {
      headers: {
        'app-id': '6166fd506281a5754336756e',
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data.data));
  }, []);

  return (
    <div className="postContainer">
      {posts.map((item) => (
        <div key={item.id} className="postCards">
          <Link to={`/users/${item.owner.id}`}>
            <div className="personTag">
              <img src={item.owner.picture} alt="post owner" />
              <h4>
                {item.owner.firstName} {item.owner.lastName}
              </h4>
            </div>
          </Link>

          <img src={item.image} alt="post img" className="postImage" />
          <h4>{item.text}</h4>
          <h4>❤️{item.likes} Likes</h4>
          <p>{item.publishDate}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
