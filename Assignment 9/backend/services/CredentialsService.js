const e = require("express");
const CredentialsModel = require("../models/Credentials");
 
exports.loginByParams = async(email) => {
  console.log(email);
  return await CredentialsModel.findOne({email});
}

exports.getAllCreds = async () => {
  return await CredentialsModel.find();
};
 
exports.createCreds = async (creds) => {
  return await CredentialsModel.create(creds);
};
exports.getBlogByUser= async (email) => {
  return await CredentialsModel.findOne({email: email});
};
 
exports.updateCreds= async (email, creds) => {
  return await CredentialsModel.findOneAndUpdate({email: email}, creds);
};
 
exports.deleteCred = async (email) => {
  return await CredentialsModel.findOneAndDelete({email:email});
};

exports.deleteAll = async() => {
  return await CredentialsModel.deleteMany();
}