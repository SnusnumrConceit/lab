const express = require('express')
const app = express()
const routes = require('./routes')
const middleware = require('./middleware')
middleware(app)

app.use('/parent', routes)

app.listen(3000);
