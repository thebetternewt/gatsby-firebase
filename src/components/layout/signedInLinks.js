import { Link } from 'gatsby'
import React from 'react'

const SignedInLinks = () => (
  <ul className="right">
    <li>
      <Link to="/create">New Project</Link>
    </li>
    <li>
      <Link to="/">Log Out</Link>
    </li>
    <li>
      <Link to="/" className="btn btn-floating orange darken-1">
        CE
      </Link>
    </li>
  </ul>
)

export default SignedInLinks
