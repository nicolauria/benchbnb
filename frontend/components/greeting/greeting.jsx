import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  )
  const personalGreeting = () => (
    <div className="header-group">
      <h2 className="personal-greeting">Hi, {currentUser.username}!</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;
