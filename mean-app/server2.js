////////////////
//base setup

//calling the packages
var express     = require('express')
var app         = express()
var bodyParser  = require('body-parser')
var morgan      = require('morgan')
var mongoose    = require('mongoose')
var port        = process.env.PORT || 8080
var User        = require('./models/user')

//APP CONFIGURATION
//use Body Parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//configure Funny Friends app to handle CORS requests
app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow_Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST' )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, \ Authorization')
  next()
})

//log all requests to the console
app.use(morgan('dev'))

//routes for API
////////////////
var apiRouter = express.Router()

//middleware to use for all requests
apiRouter.use(function(req, res, next){
  // do logging
  console.log('Somebody just came to our app!')
  //we will add more middleware in chapter 10
  //this is where we will authenticate UserSchema
  next() //make sure we go to the next routes and dont stop here
})
//test route to make sure everything is working
//(accessed at GET http://localhost:8080/api)
apiRouter.get('/', function(req, res){
  res.json({ message:  'hooray! welcome to the friends api!'})
})

//more routes for our api will happen here

//routes that end in /users
apiRouter.route('/users')

  //create a user (access at POST http://localhost:8080/api/users)
  .post(function(req, res){

    //create a new instance of the User model
    var user = new User()

    //set the users information (comes from the request)
    user.name     = req.body.name
    user.username = req.body.username
    user.password = req.body.password

    //save the user and check for errors
    user.save(function(err){
      if (err)
      //duplicate entry
      if (err.code == 11000)
      return res.json({ success: false, message: 'a user with that username already exists'})

      else
        return res.send(err)
    })
        res.json({message: 'user created'})
      })





//basic route for home page
app.get('/', function(req, res){
  res.send('Welcome to the home page')
})

//get an instance of the express router
var apiRouter = express.Router()

//test route to make sure everything is working
//accessed at GET http://localhost: 8080/api
apiRouter.get('/', function(req, res){
  res.json({ message: 'horray! welcome to our api!' })
})

//more routes for our api will happen here



//REGISTER OUR routes
//all of our routes wilbe prefixed with /api
app.use('/api', apiRouter)


//Start the server
app.listen(port)
console.log('magic happens on port ' + port)
