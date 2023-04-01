const credentialServiceVar = require("../services/CredentialsService");
const bcrypt = require("bcrypt");
const { off } = require("../models/Credentials");
 

exports.loginByParams = async(req, res) => {
  try{
    var isEmailVerify = false;
    var isPasswordVerify = false;
    var isUserNameVerify = false;

    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.username);
    const user = await credentialServiceVar.loginByParams(req.body.email);
    console.log('user iruken',user);
    if(user == null){
      res.json({
        data: user,
        status: "Not Valid"
      })
      return;
    }
    if(req.body.email == user.email){
      isEmailVerify = true;
    }
    if(req.body.username == user.fullname){
      isUserNameVerify = true;
    }

    //Checking the passwords of the requests and the db
    if(await bcrypt.compare(req.body.password, user.password)){
      console.log("Password is fine")
      isPasswordVerify = true;
    }
    var fullyVerified = false;
    if(isEmailVerify && isUserNameVerify && isPasswordVerify){
      fullyVerified = true;
      res.json({
        data: user,
        flag : fullyVerified,
        status: "Login Success"
      })
      return;
    }
    else{
      fullyVerified = false;
      res.json({
        status: "Login not success",
        flag : fullyVerified,
        status: "Not Valid"
      })
      return;
    }
  }
  catch(err){
    res.status(500).json({
      error: err.message
    })
  }
}

exports.getAllCreds = async (req, res) => {
  try {
    const credentials = await credentialServiceVar.getAllCreds();
    res.json({ data: credentials, status: "Get All API" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createCreds = async (req, res) => {
  try {
    let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let regexEmail = /^([a-zA-Z0-9_\.]+)@([a-z_\-\.]+)\.([a-z]{2,5})$/;
    let regexName = /^([a-zA-Z]+)\s([a-zA-Z]+)$/;
    

    if(!regexPassword.test(req.body.password)){
      res.status(500).json({ error: "A password must have 8 characters. Atleast 1 uppercase, 1 lowercase, 1 number and 1 special character"});
      return;
    }

    if(!regexEmail.test(req.body.email)){
      res.status(500).json({ error: "Invalid Email"});
      return;
    }

    if(!regexName.test(req.body.fullname)){
      res.status(500).json({ error: "Invalid Name"});
      return;
    }
    
    const hashedPassword = await new Promise((resolve, reject) =>{
      bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(req.body.password, salt, function(err, hash){
          if(err)
            reject(err)
          resolve(hash);
        })
      })
    });

    req.body.password = hashedPassword;
    console.log("Hashed Password is " + req.body.password);

    const blog = await credentialServiceVar.createCreds(req.body);
    res.json({ data: blog, status: "success" });
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getBlogByUser = async (req, res) => {
  try {
    const blog = await credentialServiceVar.getBlogByUser(req.body.email);
    if(blog == null){
      res.json({status: "Record doesn't exists" });
      return;
    }
    console.log("I am here")
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateCreds = async (req, res) => {
  try {
    let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let regexEmail = /^([a-zA-Z0-9_\.]+)@([a-z_\-\.]+)\.([a-z]{2,5})$/;
    let regexName = /^([a-zA-Z]+)\s([a-zA-Z]+)$/;
    

    if(!regexPassword.test(req.body.password)){
      res.status(500).json({ error: "A password must have 8 characters. Atleast 1 uppercase, 1 lowercase, 1 number and 1 special character"});
      return;
    }

    if(!regexEmail.test(req.body.email)){
      res.status(500).json({ error: "Invalid Email"});
      return;
    }

    if(!regexName.test(req.body.fullname)){
      res.status(500).json({ error: "Invalid Name"});
      return;
    }
    
    const hashedPassword = await new Promise((resolve, reject) =>{
      bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(req.body.password, salt, function(err, hash){
          if(err)
            reject(err)
          resolve(hash);
        })
      })
    });

    req.body.password = hashedPassword;
    console.log("Update API");
    const blog = await credentialServiceVar.updateCreds(req.body.email, req.body);
    if(blog == null){
      res.json({status: "Record doesn't exists" });
      return;
    }
    res.json({status: "Update API is Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteCred = async (req, res) => {
  try {
    console.log(req.body.email);
    const blog = await credentialServiceVar.deleteCred(req.body.email);
    if(blog == null){
      res.json({status: "Record doesn't exists" });
      return;
    }
    res.json({ data: blog, status: "Deleted the above record" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAll = async(req, res) => {
  try{
    await credentialServiceVar.deleteAll();
    res.json({status:"Deleted all the data"})
  }
  catch{
    res.status(500).json({error:err.message});
  }
}
