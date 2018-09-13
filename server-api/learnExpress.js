const express = require('express')
const app = express();
app.all('/secret', function (req, res, next) {
    res.send('Accessing the secret section ...')
    next() // pass control to the next handler
  });
app.get('/',(req,res)=>{
    res.send("Default Page");
   
});
app.get('/read.txt',(req,res)=>{
    res.send("read txt");
   
});
app.use(function(req,res,next){
    res.send()
})

  app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
  });
  app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
  });

  app.get('/pq*rs', function (req, res) {
    res.send('pq*rs')
  });

  app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e')
  });
  app.get(/a/, function (req, res) {
    res.send('/a/')
  })

  app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/' + 'this check last string but not work on if it takes more than fly at last')
  })

app.get('/home', (req, res) => res.send('Home page!'))
app.get('/about', (req, res) => res.send('About Page!'))
app.get('/contact', (req, res) => res.send('Contact Page!'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))