import React, { PureComponent, Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


import LoadingSpinner from '../LoadingSpinner'

class PrivateRouteBase extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      refreshLoading: true,
    }
  }

  async componentDidMount() {
    const {history, location } = this.props
    this.setState({ refreshLoading: false})
  }


  handleRender = (props) => {
    const { history, layout: Layout, component: Component, render, ...rest } = this.props
    console.log('-=-=-=-=-=-=-=', this.props)
    /* eslint-disable no-nested-ternary */
    if (Layout) {
      return (
        <Layout {...rest}>
          {Component ? (
            <Suspense fallback={<LoadingSpinner />}>
              <Component {...props} />
            </Suspense>
          ) : render ? (
            <Suspense fallback={<LoadingSpinner />}>{render(props)}</Suspense>
          ) : null}
        </Layout>
      )
    }
    /* eslint-enable no-nested-ternary */

    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Component {...props} />
      </Suspense>
    )
  }

  render() {
    const { refreshLoading } = this.state
    const { component, render, ...rest } = this.props

    return refreshLoading ? <LoadingSpinner /> : <Route render={this.handleRender} {...rest} />
  }
}

const mapStateToProps = (state) => ({
//   haveUser: state.user,
//   creditProfileState: getCreditProfileState(state),
})

const mapDispatchToProps = {
//   fetchUser,
//   loadCreditProfile,
}

PrivateRouteBase.propTypes = {
//   fetchUser: PropTypes.func.isRequired,
//   haveUser: PropTypes.object,
//   history: PropTypes.object.isRequired,
//   layout: PropTypes.element,
//   component: PropTypes.element,
//   headerActions: PropTypes.func,
//   searchPlaceholder: PropTypes.string,
}

PrivateRouteBase.defaultProps = {
//   haveUser: null,
//   layout: null,
//   component: null,
//   headerActions: null,
//   searchPlaceholder: '',
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRouteBase))