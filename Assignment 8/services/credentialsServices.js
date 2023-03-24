const CredentialsModel = require("../models/credentials");

exports.getAllCreds = async () => {
    return await CredentialsModel.find();
  };
   
exports.createCreds = async (creds) => {
return await CredentialsModel.create(creds);
};
exports.getCredsByUser = async (email) => {
return await CredentialsModel.findOne({email: email});
};

exports.updateCred = async (email, creds) => {
return await CredentialsModel.findOneAndUpdate({email:email}, creds);
};

exports.deleteCred = async (email) => {
return await CredentialsModel.findOneAndDelete({email: email});
};

exports.deleteAll = async () => {
return await CredentialsModel.deleteMany();
}