const express = require('express')
const app = express()
const port = 4000

app.get('/total_views', (req, res) => res.json({ total_views: '500' }))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))