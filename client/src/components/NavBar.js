import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

  render() {

    return (
      <nav>

        <Link to='/'>
          <h1>Startup Calendar</h1>
        </Link>

        <Link>
          <h1>Sign Up</h1>
        </Link>

        <Link>
          <h1>Log In</h1>
        </Link>

      </nav>
    )
  }
}
