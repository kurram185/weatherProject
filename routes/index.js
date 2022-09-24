const express = require('express');
const app=express()
const hbs=require('hbs')
const path=require('path')
const port=process.env.PORT || 9090
var router = express.Router();

const indexPath=path.join(__dirname,"../public")
const navPath=path.join(__dirname,"../views/partials")
hbs.registerPartials(navPath)
app.use(express.static(indexPath))
/* GET home page. */
app.set("view engine","hbs")
app.get('/', function(req, res, next) {
  res.render("index");
});
app.get('/about', function(req, res, next) {
  res.render("about");
});
app.get('/weather', function(req, res, next) {
  res.render("weather");
});
app.get('*', function(req, res, next) {
  res.render("404error");
});


app.listen(port,()=>{
  console.log("Listening...")
})

module.exports = router;
