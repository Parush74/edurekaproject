 var chalk = require('chalk');
var mongoose =require('mongoose');

//var url=('mongodb://localhost:27017/test');
var url ='mongodb://parushgupta2:parush900@ds213118.mlab.com:13118/first';
mongoose.connect(url);

mongoose.connection.on('connected',function(){
    console.log(chalk.yellow(`Mongoose connected to ${url}`));
});

mongoose.connection.on('error',function(err){
    console.log(chalk.red('Mongoose connection error :'+err));
});

mongoose.connection.on('disconnected',function(){
    console.log((chalk.red('Mongoose disconnected')));
});



var userSchema =new mongoose.Schema({
   name:String,
    email:{type:String , unique:true},
    dob:String,
    department:String,
    gender:String,
    age:String
    
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

mongoose.model('User',userSchema);







 