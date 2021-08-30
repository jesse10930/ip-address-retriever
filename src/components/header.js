import * as React from "react"
import PropTypes from "prop-types"

import "../styles/app.css"

const Header = ({ siteTitle }) => <header></header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
