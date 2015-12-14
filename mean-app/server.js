/////////////////////////////////////////////
//load the express package and create our app
var express     = require('express')
var app         = express()
var adminRouter = express.Router()
var mongoose    = require('mongoose')

/////////////////////////////
//connect to mongo db friends
mongoose.connect('mongodb://localhost:1337/friends')

////////////////////////////////////////////////////////
//send our index.html file to the user for the home page
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})



////////////////////////
//ADMINISTRATOR ROUTES

//admin MIDDLEWARE
adminRouter.use(function(req, res, next){

  //log each request to the console
  console.log(req.method, req.url)
  //continue doing what we were doing and go to the ROUTE
  next()
})

//admin route middleware to validate :name
adminRouter.param('name', function(req, res, next, name){
  //do validation on a name here
  //blah blah validation
  //log something so we know it is working
  console.log('doing some validations on ' + name)
  //once the validation is done save hte new item in the req
  req.name = name
  //go on to the next thing
  next()
})


//admin main page. the dashboard (http://localhost:1337/admin)
adminRouter.get('/', function(req, res){
  res.send('I am the dashboard')
})

//users page (http://localhost:1337/admin/users)
adminRouter.get('/users', function(req, res){
  res.send('I will show all the users')
})

//route with parameters (http://locolhost:1337/admin/users/:name)
adminRouter.get('/users/:name', function(req, res){
  res.send('hello ' + req.params.name + '!')
})

//posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req, res) {
  res.send('I show all the posts')
})

//hello user route - route with parameters (http://localhost:1337/hello/:name)
adminRouter.get('/hello/:name', function(req, res){
  res.send('hello ' + req.name + '!')
})

//apply these routes to the application
app.use('/admin', adminRouter)

//////////////////
//app.route
app.route('/login')
  //show the form(GET http://localhost:1337/login)
  .get(function(req, res) { res.send('this is the login form')})
  //process the form(POST http://localhost:1337/login)
  .post(function(req, res){ console.log('processing')
                            res.send('processing the login in form!')
  })



//////////////////
//start the server
app.listen(1337)
console.log('1337 is the magic port!')
