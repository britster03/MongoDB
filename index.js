// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ronnyKart', {useNewUrlParser: true});

var db = mongoose.connection ;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open',function(){
 console.log("We are connected")
});

var kittySchema = new mongoose.Schema({
    name: String
  });
kittySchema.methods.speak = function () {
    var greeting = this.name
    console.log(greeting);
  }
var Kitten = mongoose.model('Kitten',kittySchema)
 var ronnykitty= new Kitten({ name: 'ronnyKitty' });
  console.log(ronnykitty.name); // 'Silence'
ronnykitty.save(function (err, ronnykitty) {
    if (err) return console.error(err);
    ronnykitty.speak();
  });
  Kitten.find({name:"ronnykitty"}, function (err,kittens){
 if(err) return console.error(err);
 console.log(kittens);
  })
