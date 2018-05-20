module.exports = (app) => {
  app.use((req, res, next) => {
    console.log('new request is catched ' + Date.now())
    next()
  })
}

