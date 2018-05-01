import React from 'react'
import ReactPaginate from 'react-js-pagination'
import Loading from 'components/Common/Loading'
import './style.css'

const FETCH_LIMIT = 16

interface PaginationProps {
  rows: Array<{}>
  totalCount: number
  isReady: boolean
}

const Pagination = ({ rows, totalCount, isReady }: PaginationProps) => {
  const handlePageClick = () => ({})
  const tableElement = (
    <table>
      <thead>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Joe</td>
    <td>Swanson</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td>$250</td>
</tr>
</tbody>
</table>
)

const paginateElement = (
  <ReactPaginate
  itemsCountPerPage={FETCH_LIMIT}
  totalItemsCount={450}
  pageRangeDisplayed={5}
  onChange={handlePageClick}
/>)

const table = (<div>{tableElement}{paginateElement}</div>)

console.log(rows, totalCount, isReady)
  return (
    <Loading loading={!isReady}>
      {isReady ? table : <div />}
    </Loading>
)
}

export default Pagination
