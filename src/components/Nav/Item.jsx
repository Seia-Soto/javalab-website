import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const NavItem = props => {
  const styles = css({
    margin: props.active ? '0 25px' : '0 12px',

    color: 'white',
    fontSize: props.active ? '18px' : '15px',
    fontWeight: props.active ? 700 : 400
  })

  return (
    <span {...styles}>
      {props.children}
    </span>
  )
}

NavItem.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool
}

export default NavItem
