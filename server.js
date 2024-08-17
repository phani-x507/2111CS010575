const express = require('express')
const app = express()
const port = 5346

app.get('/', (req, res) => {
  res.send('This is Working')
})

app.listen(port)