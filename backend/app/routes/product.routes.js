const router = require("express").Router();
const product = require("../controllers/product.controller");

//list all products
router.get("/lists",product.lists);
router.post("/save",product.store);

module.exports = router;