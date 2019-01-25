import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => (
  <div>
    <header style={{ padding: '1rem' }}>
          <Link to="/" style={{ float: 'left' }}>Home</Link>
          <Link to="/blog/" style={{ float: 'right' }}>Blog</Link>
    </header>

    <main>
        {children}
    </main>
  </div>
)
