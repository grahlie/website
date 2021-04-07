import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        background: `rgb(65,38,130)`,
        background: `linear-gradient(138deg, rgba(65,38,130,1) 0%, rgba(237,108,94,1) 100%)`,
        minHeight: '100vh',
        color: '#fff'
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        > 
          © {new Date().getFullYear()}, Mathias Grahl
        </footer>
      </div>
  </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
