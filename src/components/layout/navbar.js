import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { connectFirebase } from 'react-redux-firebase'

import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'

const Header = ({ siteTitle }) => (
  <nav className="nav-wrapper deep-purple accent-4">
    <div className="container">
      <Link to="/" className="brand-logo">
        {siteTitle}
      </Link>
      <SignedInLinks />
      <SignedOutLinks />
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const mapStateToProps = state => {
  console.log(state)
  return {}
}

export default connect(mapStateToProps)(Header)
