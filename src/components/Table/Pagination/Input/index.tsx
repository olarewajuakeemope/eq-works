import React, { Fragment } from 'react'
import ReactPaginate from 'react-js-pagination'
import Loading from 'components/Common/Loading'
import './style.css'

const FETCH_LIMIT = 16

interface InputProps {
  totalCount: number
  isReady: boolean
}

const Input = ({ totalCount, isReady }: InputProps) => {
  const handlePageClick = () => ({})

const paginateElement = (
  <ReactPaginate
  itemsCountPerPage={FETCH_LIMIT}
  totalItemsCount={totalCount}
  pageRangeDisplayed={5}
  onChange={handlePageClick}
/>)

const table = (<Fragment>{paginateElement}</Fragment>)
  return (
    <Loading loading={!isReady}>
      {isReady ? table : <div />}
    </Loading>
)
}

export default Input
