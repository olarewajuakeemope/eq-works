import { connect } from 'react-redux'
import Link from 'components/Table/SideBar/Content/Link'
import { getStats } from 'redux/stats/actions'

const mapDispatchToProps = {
  getStats,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    onClick: dispatchProps.getStats,
  }
}

export default connect(null, mapDispatchToProps, mergeProps)(Link)
