const express = require("express");

const {
  getHomePage,
  getProductDetail,
  getAdminPage,
  postProduct,
  putProduct,
  deleteProduct,
  addproductpage,
  getListProduct,
  updateproductpage,
  getSanPhamNgungBan,
  banlaisanpham
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/chitietsanpham", getProductDetail);
router.get("/admin", getAdminPage);
router.post("/create-product", postProduct);
router.post("/update-product", putProduct);
router.post("/delete-product/:id", deleteProduct);
router.post("/banlai-product/:id", banlaisanpham);
router.get("/addproduct", addproductpage);
router.get("/updateproduct/:id", updateproductpage);
router.get("/listproduct", getListProduct);
router.get("/sanphamngungban", getSanPhamNgungBan);

module.exports = router;
