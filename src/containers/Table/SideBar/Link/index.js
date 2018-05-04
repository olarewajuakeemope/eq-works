import { connect } from 'react-redux'
import Link from 'components/Table/SideBar/Content/Link'
import { getStats } from 'redux/table/actions'

const mapDispatchToProps = {
  onClick: getStats,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...dispatchProps,
  }
}

export default connect(null, mapDispatchToProps, mergeProps)(Link)
