import React, { Fragment } from 'react'
import ReactPaginate from 'react-js-pagination'
import { constants } from 'config'
import './style.css'

const FETCH_LIMIT = constants.pagination.LIMIT

interface InputProps {
  totalCount: string
}

const Input = ({ totalCount }: InputProps) => {
  const handlePageClick = (pageNo: number) => {
    console.log(typeof pageNo, pageNo)
  }

  const input = (
    <ReactPaginate
      activePage={47}
      itemsCountPerPage={FETCH_LIMIT}
      totalItemsCount={parseInt(totalCount)}
      pageRangeDisplayed={5}
      disabledClass={'Table__Component__Pagination__Input__disabled'}
      activeLinkClass={'Table__Component__Pagination__Input__active'}
      innerClass={'Table__Component__Pagination__Input__pagination'}
      itemClass={'Table__Component__Pagination__Input__Pagination__item'}
      onChange={handlePageClick}
    />
  )

  const table = (
    <div className="Table__Component__Pagination__Input__wrapper">
      {input}
    </div>
  )

  return (<Fragment>{table}</Fragment>)
}

export default Input
