// express
const express = require("express");
const router = express.Router();

// import controllers
const adminController = require("../controllers/admin");

const { protectRoute } = require("../middlewares/auth");

// routes

router.post("/add-user", protectRoute, adminController.addNewUser);
router.delete("/delete-user/:userId", protectRoute, adminController.deleteUser);
router.post("/update-user/:userId", protectRoute, adminController.updateUser);

router.delete("/clear-faculty", protectRoute, adminController.clearFaculty);
router.delete("/clear-students", protectRoute, adminController.clearStudents);

// exports
module.exports = router;
