const { compile } = require("ejs");
const connection = require("../config/database");
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  delProduct,
  getAllProductsNgungBan,
  updateBanLaiSanPham,
} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  return res.render("index.ejs");
};

const getProductDetail = (req, res) => {};

const getAdminPage = async (req, res) => {
  let result = await getAllProducts();
  return res.render("admin.ejs", { listProducts: result });
};

const postProduct = async (req, res) => {
  console.log(req.body);

  let TenMon = req.body.TenMon;
  let IDDanhMuc = req.body.IDDanhMuc;
  let MoTa = req.body.MoTa;
  let GiaBan = req.body.GiaBan;
  let TrangThai = 1;

  let result = await addProduct(TenMon, IDDanhMuc, MoTa, GiaBan, TrangThai);

  if (result.affectedRows == 1) {
    res.redirect("/admin");
  }
};

const putProduct = async (req, res) => {
  let IDSanPham = req.body.IDSanPham;
  let TenMon = req.body.TenMon;
  let IDDanhMuc = req.body.IDDanhMuc;
  let MoTa = req.body.MoTa;
  let GiaBan = req.body.GiaBan;

  let result = await updateProduct(TenMon, IDDanhMuc, MoTa, GiaBan, IDSanPham);

  if (result.affectedRows == 1) {
    res.redirect("/admin");
  }
};

const deleteProduct = async (req, res) => {
  let IDSanPham = req.params.id;

  let result = await delProduct(IDSanPham);

  if (result.affectedRows == 1) {
    res.redirect("/admin");
  }
};

const addproductpage = (req, res) => {
  return res.render("addProductPage.ejs");
};

const updateproductpage = async (req, res) => {
  let IDSanPham = req.params.id;
  let product = await getProductById(IDSanPham);

  if (product.IDSanPham != null) {
    return res.render("editProductPage.ejs", { product: product });
  } else {
    return res.render("NoPage");
  }

  // return res.render("editProductPage.ejs", { product: product });
};
const getListProduct = async (req, res) => {
  let result = await getAllProducts();
  return res.render("listProduct.ejs", { listProducts: result });
};

const getSanPhamNgungBan = async (req, res) => {
  let result = await getAllProductsNgungBan();
  return res.render("listProduct.ejs", { listProducts: result });
};

const banlaisanpham = async (req, res) => {
  let IDSanPham = req.params.id;

  let result = await updateBanLaiSanPham(IDSanPham);

  if (result.affectedRows == 1) {
    res.redirect("/admin");
  }
};
module.exports = {
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
  banlaisanpham,
};
