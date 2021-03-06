const router = require('express').Router();
const { Page } = require("../models")
const { addPage } = require('../views')

router.get("/", (req, res, next)=> {
  res.send('retrieve all wiki pages')
})

router.post("/", async (req, res, next)=> {

  const page = new Page({
    title: req.body.title,
    content: req.body.content

  })

  try {
    await page.save();
    res.redirect('/');
  } catch (error){ next(error) }
});

router.get("/add", (req, res, next)=> {
  res.send(addPage())
})




module.exports = router
