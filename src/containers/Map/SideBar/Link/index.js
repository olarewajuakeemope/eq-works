import { connect } from 'react-redux'
import Link from 'components/Map/SideBar/Content/Link'
import { setTitle } from 'redux/map/actions'

const mapDispatchToProps = {
  onClick: setTitle,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...dispatchProps,
  }
}

export default connect(null, mapDispatchToProps, mergeProps)(Link)
