const credsService = require("../services/credentialsServices");
const bcrypt = require("bcrypt");

exports.getAllCreds = async (req, res) => {
    try {
      const credentials = await credsService.getAllCreds();
      res.json({ data: credentials, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

exports.createCreds = async (req , res) => {
try{
    let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let regexEmail = /^([\w\.]+)@northeastern.edu+$/;
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
        bcrypt.hash(req.body.password, 10, function(err, hash){
            if(err)
            reject(err)
            resolve(hash);
        })
        });
    
    req.body.password = hashedPassword;
    console.log("Hashed Password is " + req.body.password);

    const blog = await credsService.createCreds(req.body);
    res.json({ data: blog, status: "success" });
}
catch(err){
    res.status(500).json({ error: err.message });
}
};

exports.getCredsByUser = async (req, res) => {
    try {
      const userCred = await credsService.getCredsByUser(req.body.email);
      if (userCred == null){
        res.json({status:"Record doesn't exist"});
        return;
      }
      res.json({ data: userCred, status: "successfully retrieved the user record" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


exports.updateCred = async (req , res) => {
try{
    let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let regexEmail = /^([\w\.]+)@northeastern.edu+$/;
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
        bcrypt.hash(req.body.password, 10, function(err, hash){
            if(err)
            reject(err)
            resolve(hash);
        })
        });
    
    req.body.password = hashedPassword;
    console.log("Hashed Password is " + req.body.password);
    
    console.log("Update API");
    const updateCred = await credsService.updateCred(req.body.email,req.body);
    if (updateCred == null){
        res.json("Record doesn't exist")
    }
    res.json({ data: updateCred, status: "Updated the record" });
}
catch(err){
    res.status(500).json({ error: err.message });
}
};

exports.deleteCred = async (req, res) => {
try {
    const delCred = await credsService.deleteCred(req.body.email);
    if(delCred == null){
        res.json({status:"Record doesn't exist"});
    }
    res.json({ data: delCred, status: "successfully deleted the record" });
} catch (err) {
    res.status(500).json({ error: err.message });
}
}; 

exports.deleteAll = async (req, res) => {
    try {
      await credsService.deleteAll();
      res.json({status: "Deleted all data" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
