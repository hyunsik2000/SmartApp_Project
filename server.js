import express from "express"
import mysql from "mysql"

const app = express()
const port = 3010

const db = mysql.createConnection({
	host: 'svc.sel4.cloudtype.app',
    port: 31862,
	user: 'root',
	password: 'hyun11300@',
	database: 'KoreanMovies',
})

db.connect()

app.get('/', (req, res) => {
  res.json({result: '스마트앱프로그래밍 백엔드'})
})

app.get('/Movies', (req, res) => {
    const sql = 'select * from Movie'
    
      db.query(sql, (err, rows) => {
          if (err) {
              res.json({result: "error"})
              return console.log(err)
          }
          res.json(rows)
      })
  })

app.listen(port, () => {
  console.log(`서버 실행됨 (port ${port})`)
})
