const router = require('express').Router();
const { addPage } = require('../views')

router.get("/", (req, res, next)=> {
  res.send('retrieve all wiki pages')
})

router.post("/", (req, res, next)=> {
  res.send('new post for a wiki')
})

router.get("/add", (req, res, next)=> {
  res.send(addPage())
})








module.exports = router
