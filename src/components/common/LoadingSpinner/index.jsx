import React from 'react'
import { ClipLoader } from 'react-spinners'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// import './styles.scss'

const LoadingSpinner = ({ isOverlay, innerLoader }) => (
  <div className={classNames('sweet-loading', { overlay: isOverlay }, { innerLoader })}>
    <ClipLoader sizeUnit="px" size={150} color={'red'} loading />
  </div>
)

// LoadingSpinner.propTypes = {
//   isOverlay: PropTypes.bool,
//   innerLoader: PropTypes.bool,
// }

LoadingSpinner.defaultProps = {
  isOverlay: false,
  innerLoader: false,
}

export default LoadingSpinner
