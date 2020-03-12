const { db, User, Page } = require('./models');
const express = require("express")
const morgan = require("morgan")
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')


const app = express()

app.use(morgan('dev'))
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.get("/", (req, res) => {
  res.redirect('/wiki')
})



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
