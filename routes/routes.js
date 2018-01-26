var express =require('express');
var router = express.Router();
var mongoose =require('mongoose');
var User =mongoose.model('User');


router.post('/post',function(req,res){
   console.log(req.body);
    console.log('post');
    
  
    var newuser = new User();
    newuser.name=req.body.name;
    newuser.email=req.body.email;
    newuser.dob=req.body.dob;
    newuser.department=req.body.department;
    newuser.gender=req.body.gender;
    newuser.age=req.body.age;
    
    newuser.save(function(err,savedUser){
          if(err){
         console.log("User already exists with that email");
             res.json({status:400,data:{}});
//         var message="A user already exists with that username or email";
//         res.render("register",{errorMessage:message});
            //  res.end();
         
       }else{
           
            console.log(`User succesfully saved`);
          // res.end();
          res.json({status:200,data:{savedUser}});
       }
        
        
        
    });
    
    
    
});




router.get('/getuser',function(req,res){

   console.log('getuser');
   
  User.find({}, function(err,data){
                    
      res.send(data);
            
              });
        
        
        
    });




router.delete('/delete/:id',function(req,res){
   
    console.log(req.params.id);
   var data =req.params.id;
    
    
   User.remove({_id: data }, function(err) {
    if (!err) {
            res.json({status:200});
    }
    else {
            res.json({status:400});
    }
});
    
    
    
    
    
    
});
    


router.put('/put',function(req,res){
    console.log(req.body);
    var newuser={};
    newuser.name=req.body.name;
    newuser.email=req.body.email;
    newuser.dob=req.body.dob;
    newuser.department=req.body.department;
    newuser.gender=req.body.gender;
    newuser.age=req.body.age;
    
    User.update({_id:req.body.id}, newuser, function(err, data) {
    if (err) {
      res.json({status:400,data:{}});
    }
        else
    res.json({status:200,data:data});
  });
    
    
    
    
    
    
    
    

    
    
});
    
    






module.exports =router;