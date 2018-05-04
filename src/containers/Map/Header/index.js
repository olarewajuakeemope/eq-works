import { connect } from 'react-redux'
import { getStatsTitle } from 'redux/map/selectors'
import { reduxForm } from 'redux-form'
import { mapQueryForm } from 'redux/forms'
import { getQuery } from 'redux/map/actions'
import Header from 'components/Map/Header'

const mapStateToProps = (state) => {
  return {
    title: getStatsTitle(state),
  }
}

const mapDispatchToProps = {
  getQuery,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    onSubmit: query => dispatchProps.getQuery(query, stateProps.title),
    ...ownProps,
    ...stateProps,
  }
}

const mapHeaderForm = reduxForm({
  form: mapQueryForm.name,
  validate: ({ minDate, maxDate, column }) => {
    const errors = {}
    if (!minDate) {
      errors.minDate = 'select a starting date'
    } else if (!maxDate) {
      errors.maxDate = 'select an ending date'
    } else if (maxDate <= minDate) {
      errors.minDate = 'select an earlier date'
      errors.maxDate = 'select a later date'
    } else if(!column) {
      errors.column = 'select a metric'
    }
    return errors
  },
})(Header)

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(mapHeaderForm)
