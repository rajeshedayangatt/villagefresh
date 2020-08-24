const user = require("../controllers/user.controller");
const router = require("express").Router();


router.post("/register",user.register);
router.post("/login",user.login);
router.get("/details",user.details);

module.exports = router;
