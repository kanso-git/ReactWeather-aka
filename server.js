var express  =  require('express');
//define the prot for heroku
const PORT = process.env.PORT || 3000;

// Create the app
var app = express();



// set a middleware to redirect all the https requests to http
app.use(function(req,res, next){
  var fullUrl = req.headers.host+'/'+req.url;
  console.log("fullUrl is "+fullUrl);

  if(req.headers['x-forwarded-proto'] === 'https'){
    // redirect https req to  http req
    console.log('if block -redirect request to http://'+req.hostname+req.url);
    res.redirect('http://'+req.hostname+req.url);
  }else{
    //if it's already on http continue ...
    console.log("else block -fullUrl  is "+fullUrl);
    next();
  }
});

//set the static folder
app.use(express.static('public'));

// start the listener
app.listen(PORT, function(){
 console.log('Express server is up on port '+PORT);
});
