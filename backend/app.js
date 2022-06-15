const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const { createConnection } = require('./model/connect');
const { getUsers, setUsers, deleteUsers ,putUsers  } = require('./controllers/users')
const { getEnvVars } = require('./common/utils')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const port = getEnvVars("PORT");

createConnection()

app.listen(port, () => console.log(`Server running at ${port} port`))


app.get('/users', getUsers)
app.post('/users', setUsers)
app.put('/users/:id', putUsers)
app.delete('/users/:id', deleteUsers);