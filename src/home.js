// src/Home.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const { name, email } = location.state;

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Email: {email}</p>
    </div>
  );
}

export default Home;
