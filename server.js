//Initializing Packages
const express = require('express')//Express is server manager
const path = require('path')//Path is middleware that connects directories
const PORT = process.env.PORT || 3001;//Port is just a number, no magic. like saying var port = 3001;

const app = express()//Turning key to activate connection
//app methods include : app.get app.post and app.listen
//Initialized Packages

//Define middleware here - these two format URLs and JSON objects respectively
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
//Defined middleware

//wtf does our server even do?
//homepage
app.get('/', function(req, res){
app.use(express.static( path.join(__dirname, '/index.html')))
})

app.listen(PORT, function() {
console.log('is this thing on')
}) //app.listen(needs two arguments) => (url,action)