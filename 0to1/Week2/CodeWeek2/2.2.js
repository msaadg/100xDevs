const express = require('express')
const bodyParser = require('body-parser')
const app = express()        // This is the express function. It returns an app object
// const port = 3000
const port = process.env.PORT || 3000; // Does the same thing as above. First, do `export PORT=3001` in the terminal

// middlewares
app.use(bodyParser.json());     // This is a middleware. It is used to parse the body of the request

app.get('/', function(req, res) {
    console.log(req.headers.authorization);
    res.send('Hello World!')      // Whenever someone would hit our server, this function would be called at the end
})

app.post('/', function(req, res) {
    console.log(req.body.msg);      // This is used to get the body of the request
    console.log(req.query.msg);    // This is used to get the query parameters. They are giveb after the ? in the url
    res.send('<b>hi there</b>')
})


// app.listen(port)     // This is sufficient too

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})