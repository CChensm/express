const express = require('express')
const app = express()
const port = 3000
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.get('/', function (req, res) {
  res.send('hello, express')
})

app.use('/', indexRouter)
app.use('/users', userRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))