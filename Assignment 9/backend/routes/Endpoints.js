//TO-DO: Brcypt for password
const express = require("express");

const {
  getAllCreds,
  createCreds,
  getBlogByUser,
  updateCreds,
  deleteCred,
  deleteAll,
  loginByParams
} = require("../controller/CredentialController");
 
const router = express.Router();
 
router.route("/create").post(createCreds);
router.route("/getAll").get(getAllCreds);
router.route("/update").put(updateCreds);
router.route("/getByEmail").get(getBlogByUser);
router.route("/delete").delete(deleteCred);
router.route("/deleteAll").delete(deleteAll);
router.route("/login").post(loginByParams);
 
module.exports = router;