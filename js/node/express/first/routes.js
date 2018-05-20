const express = require('express')
const router = express.Router()


router.get('/:biba([A-Za-z0-9]+)', (req, res) => {
  res.send('hello parent root' + req.params.biba)
})

router.all('/test',(req, res) => {
  res.send("biba")
})

router.get('*', (req, res) => {
  res.send('not found biba')
})

module.exports = router;
