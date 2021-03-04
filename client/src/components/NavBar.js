import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

  // TO DO: Add state, login status?

  render() {

    return (
      <nav className="flex justify-between bg-gray-900 p-4">

        <Link to='/' className="text-lg text-white">
          Startup Calendar
        </Link>

        <div className="flex text-lg text-white font-bold">
          <Link className="mr-6">
            Sign Up
          </Link>

          <Link>
            Log In
          </Link>
        </div>

      </nav>
    )
  }
}
