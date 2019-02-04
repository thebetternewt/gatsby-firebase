import { Link } from 'gatsby'
import React from 'react'

const SignedOutLinks = () => (
  <ul className="right">
    <li>
      <Link to="/signup">Sign Up</Link>
    </li>
    <li>
      <Link to="/login">Log In</Link>
    </li>
  </ul>
)

export default SignedOutLinks
