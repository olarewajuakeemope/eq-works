import { connect } from 'react-redux'
import { getStats } from 'redux/table/selectors'
import Header from 'components/Table/Header'

const mapStateToProps = (state) => {
  const { title } = getStats(state)
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
