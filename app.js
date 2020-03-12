const { db, User, Page } = require('./models');

const express = require("express")

const app = express()

const PORT = 3000

const init = async () => {

  try{
  await db.sync({force: true})

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}!`)
    })

  } catch(err){
    console.log("the kitchen is on fire")
  }

}


init();

db.authenticate().
then(() => {
  console.log('connected to the database');
})
