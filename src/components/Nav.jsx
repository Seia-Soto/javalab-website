import React from 'react'
import { css } from 'glamor'

import NavItem from './NavItem'

const Nav = props => {
  const styles = css({
    position: 'fixed',
    zIndex: 128,
    top: 0,
    width: '100%',
    height: '50px',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',

    background: 'rgba(0,0,0,0.85)',
    backdropFilter: 'blur(25px)',

    borderBottom: '1.2px solid rgba(0,0,0,0.6)'
  })

  return (
    <div {...styles}>
      <NavItem active>
        JavaLab
      </NavItem>
      <NavItem>Slack</NavItem>
    </div>
  )
}

export default Nav
