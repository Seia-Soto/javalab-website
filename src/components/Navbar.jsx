import React from 'react'
import { Link } from 'react-router-dom'

import * as Nav from './Nav'

const Navbar = props => {
  return (
    <Nav.Container>
      <Nav.Item active>
        <Link to='/'>
          JavaLab
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/slack'>
          Slack
        </Link>
      </Nav.Item>
    </Nav.Container>
  )
}

export default Navbar
