import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const ContentWrapper = props => {
  const styles = css({
    margin: '50px auto 0 auto',
    padding: '16px',
    maxWidth: '900px'
  })

  return (
    <div {...styles}>
      {props.children}
    </div>
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.any
}

export default ContentWrapper
