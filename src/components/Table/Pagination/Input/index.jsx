import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-js-pagination'
import { constants } from 'config'
import './style.css'

const FETCH_LIMIT = constants.pagination.LIMIT

class Input extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    page: PropTypes.number,
    totalCount: PropTypes.number,
  }

  static defaultProps = {
    totalCount: 0,
    page: 1,
  }

  state = {
    activePage: 1,
  }

  handlePageClick = activePage => {
    this.setState({ activePage })
    this.props.onClick((activePage * FETCH_LIMIT) - FETCH_LIMIT)
  }

  UNSAFE_componentWillReceiveProps({ page }) {
    if (page === 1) {
      this.setState({
        activePage: 1,
      })
    }
  }

  render() {
    const input = (
      <ReactPaginate
        activePage={this.state.activePage}
        itemsCountPerPage={FETCH_LIMIT}
        totalItemsCount={this.props.totalCount}
        pageRangeDisplayed={5}
        hideFirstLastPages={true}
        disabledClass={'Table__Component__Pagination__Input__disabled'}
        activeLinkClass={'Table__Component__Pagination__Input__active'}
        innerClass={'Table__Component__Pagination__Input__pagination'}
        itemClass={'Table__Component__Pagination__Input__Pagination__item'}
        onChange={this.handlePageClick}
      />
    )

    const table = (
      <div className="Table__Component__Pagination__Input__wrapper">
        {input}
      </div>
    )

    return (<Fragment>{table}</Fragment>)
  }
}

export default Input
