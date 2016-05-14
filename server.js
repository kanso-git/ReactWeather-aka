var express  =  require('express');
//define the prot for heroku
const PORT = process.env.PORT || 3000;

// set a middleware to redirect all the https requests to http
app.use(function(req,res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
   //if it's already on http continue ...
    next();
  }else{
    // redirect https req to  http req
    res.redirect('http://'+req.hostname+req.url);
  }
});

// Create the app
var app = express();

//set the static folder
app.use(express.static('public'));

// start the listener
app.listen(PORT, function(){
 console.log('Express server is up on port '+PORT);
});
