import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const NavContainer = props => {
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
      {props.children}
    </div>
  )
}

NavContainer.propTypes = {
  children: PropTypes.any
}

export default NavContainer
