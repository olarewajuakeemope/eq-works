import { connect } from 'react-redux'
import Link from 'components/Map/SideBar/Content/Link'
import { getStats } from 'redux/map/actions'

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
