var names =['aka','dyaco','dyoukeh','oum dyacou'];

names.forEach(function(name){
  console.log("foreach classic",name);
});

names.forEach(name => console.log("Short ",name));


var returnMe = name => name +'!';

var returnStatic = ()=> ' Static *******  !';
console.log(returnMe('Abdallah'));

console.log(returnStatic());


var obj ={
  name:"abdallah",
  greetFamily: function (){
    names.forEach((name) => console.log(this.name +" says hi to " +name))
  }
};

console.log(obj.greetFamily());

var add2Numbers = (a,b) =>  a+b;

console.log(add2Numbers(3,5));
