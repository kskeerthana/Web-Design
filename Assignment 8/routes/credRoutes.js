const express = require("express");
const {
  getAllCreds,
  createCreds,
  getCredsByUser,
  updateCred,
  deleteCred,
  deleteAll,
} = require("../controllers/credsController");
 
const router = express.Router();
 
router.route("/create").post(createCreds);
router.route("/getAll").get(getAllCreds);
router.route("/update").put(updateCred);
router.route("/getByEmail").get(getCredsByUser);
router.route("/delete").delete(deleteCred);
router.route("/deleteAll").delete(deleteAll);
 
module.exports = router;