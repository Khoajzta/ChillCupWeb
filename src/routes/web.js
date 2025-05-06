const express = require("express");

const {
  getHomePage,
  getProductDetail,
  getAdminPage,
  postProduct,
  addproductpage,
  getListProduct,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/chitietsanpham", getProductDetail);
router.get("/admin", getAdminPage);
router.post("/create-product", postProduct);
router.get("/addproduct", addproductpage);
router.get("/getlistproduct", getListProduct);
module.exports = router;
