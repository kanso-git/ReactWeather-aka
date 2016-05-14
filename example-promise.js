/*
function getTempCallBack(location, callback){
  callback(undefined,78);
  callback('City not found');
}
getTempCallBack('Orbe',function(err,temp){
  if(err){
  console.log('error',err);

  }else{
    console.log("Success",temp);
  }
});

*/
/**
function getTempPromise(loc) {
    return new Promise(function(resolve, reject) {
        if (typeof loc === 'string' && loc.trim().length > 0) {
            resolve("in "+loc +" the temperature is "+73);
        } else {
            reject({
                'error': 'error deyek'
            });
        }
    });
};


getTempPromise('Orbe').then(function(d) {
    console.log(d);
}, function(error) {
    console.log(error);
})
**/


function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(parseInt(a) + parseInt(b));
        }
        else {
            reject("errorrrrrrr");
        }
    });
  }

    var goodPromise = addPromise(1, 7);
    var badPromise = addPromise(2, 'b');

    badPromise.then(function(s) {
        console.log(s);

    }, function(err) {
        console.log(err);
    })
