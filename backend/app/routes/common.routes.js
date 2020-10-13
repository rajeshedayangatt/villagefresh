const customer = require("../controllers/customer.controller");
const router = require("express").Router();

router.post("/login",customer.login);
router.post("/register",customer.register);
router.post("/logout",customer.logout);

module.exports = router;