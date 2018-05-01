import { connect } from 'react-redux'
import { getStatsTitle } from 'redux/table/selectors'
import Header from 'components/Table/Header'

const mapStateToProps = (state) => {
  const title = getStatsTitle(state)
  return {
    title,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
  }
}

export default connect(mapStateToProps, null, mergeProps)(Header)
