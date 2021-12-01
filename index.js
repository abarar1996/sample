// Applicaton level middleware

const express = require ('express')
const app = express()
const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        console.log("Please provide Your age");
    }else if (req.query<18){
        console.log("Your the under the age");
    }else{
        next()
    }
}
app.use(reqFilter)
app.get('/',(req,res)=>{
    res.end("Home page")
})

app.get('/Login',(req,res)=>{
    res.send("Login page")
})
app.get('/About',(req,res)=>{
    res.send("About Page")
})

app.listen(200,(err)=>{
    if(!err){
        console.log("Serevr started");
    }else{
        console.log(err);
    }
})



// Writing the file
const fs = require('fs')

const content = 'Some content!'

fs.writeFile('./Users/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

// reading some file

const fs = require('fs')

fs.readFile('./Users/test.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

// Third party module
const chalk=require("chalk");

// Printing the text
console.log(chalk.red("Abarar"))

// Events emitter

const events = require ('events')
const eventEmitter = new events.EventEmitter()
eventEmitter.on("Speak",function(name){
    console.log(name,"is Speak");
})
eventEmitter.emit("Speak","Ab")


// Remove the file
const fs = require('fs')

const path = './Users/test.txt'

fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
    return
  }

  // file removed
})

