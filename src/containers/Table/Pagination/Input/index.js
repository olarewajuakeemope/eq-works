import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PaginationInput from 'components/Table/Pagination/Input'
import { getStats } from 'redux/table/selectors'

const mapStateToProps = (state, props) => {
  return {
    content: getStats(state),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { totalCount } = stateProps.content
  return {
    totalCount,
    ...ownProps,
  }
}

const PaginationInputContainer = ({ totalCount }) => (
  <Fragment>
    <PaginationInput totalCount={totalCount} />
  </Fragment>
)

PaginationInputContainer.propTypes = {
  totalCount: PropTypes.string,
}

export default connect(mapStateToProps, null, mergeProps)(PaginationInputContainer)
