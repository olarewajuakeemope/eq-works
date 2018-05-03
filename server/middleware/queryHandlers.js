import pg from 'pg'

const pool = new pg.Pool()

const getRowCount = q => {
  const query = `${q};`
  return pool.query(query).then((r) => {
    return r.rows.length
  }).catch(err => err)
}

export async function paginateQuery(req, res, next) {
  const { sqlQuery } = req
  const totalCount = await getRowCount(sqlQuery)
  const limit = parseInt(req.query.limit, 10) || totalCount
  const offset = parseInt(req.query.offset, 10) || 0
  const pageNumber = Math.ceil(((offset) / (limit)) + 1) || 1

  const query = `${sqlQuery} LIMIT ${limit} OFFSET ${offset};`
  pool.query(query).then(r => {
    if (!r.rows) {
      return res.send({
        pageNumber: 1,
        pageCount: 0,
        pageSize: 0,
        totalCount: 0,
        rows: []
      })
    }

    const pageCount = Math.ceil(totalCount / limit)
    const pageSize = limit
    return res.status(200).send({
      pageNumber,
      pageCount,
      pageSize,
      totalCount,
      rows: r.rows,
    })
  })
  .catch(next)
}

export function handleQuery(req, res, next) {
  pool.query(req.sqlQuery).then((r) => {
    return res.json(r.rows || [])
  }).catch(next)
}
