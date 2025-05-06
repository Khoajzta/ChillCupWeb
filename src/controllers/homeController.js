const connection = require("../config/database");
const { getAllProducts } = require("../services/CRUDService");

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

  let sql = `insert into SanPham(TenMon,IDDanhMuc,MoTa,GiaBan,TrangThai) 
                values(?,?,?,?,?)`;

  let [result, fields] = await connection.query(sql, [
    TenMon,
    IDDanhMuc,
    MoTa,
    GiaBan,
    1,
  ]);

  return res.send("create success");
};

const addproductpage = (req, res) => {
  return res.render("addProductPage");
};

const getListProduct = async (req, res) => {
  let result = await getAllProducts();
  return res.render("listProduct.ejs", { listProducts: result });
};
module.exports = {
  getHomePage,
  getProductDetail,
  getAdminPage,
  postProduct,
  addproductpage,
  getListProduct,
};
