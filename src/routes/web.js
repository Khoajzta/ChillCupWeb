const express = require("express");

const {
  getHomePage,
  getProductDetail,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/chitietsanpham", getProductDetail);

module.exports = router;
