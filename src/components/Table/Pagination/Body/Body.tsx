import React from 'react'

interface BodyProps {
  rows: Array<{}>
}

const Body = ({ rows }: BodyProps) => {
  const bodyRows = rows.map(row =>
    Object.values(row).map((val, i) => <td key={i}>{val}</td>))

  const body = bodyRows.map((row, i) => <tr key={i}>{row}</tr>)
  return (
    <tbody>{body}</tbody>
  )
}

export default Body
