const express = require("express")
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware")
const router = express.Router();

//Only admins can access this route
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) =>{
    res.json({ message: "Welcome, Admin"});
});

//Only admin and manager can access this route
router.get("/manager", verifyToken, authorizeRoles("admin", "manager"), (req, res) =>{
    res.json({message: "Welcome, Manager"})
});

//All can access this route
router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) =>{
    res.json({message: "Welcome, User"})
});


module.exports = router;