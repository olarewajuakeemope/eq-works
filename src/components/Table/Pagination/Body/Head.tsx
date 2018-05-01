import React from 'react'

interface HeadProps {
  rows: {
    [title: string]: string
  }
}

const Head = ({ rows }: HeadProps) => {
  const header = Object.keys(rows).map((title, i) => <th key={i}>{title}</th>)
  return (
    <tr>{header}</tr>
  )
}

export default Head
