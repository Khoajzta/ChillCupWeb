const connection = require("../config/database");
const getAllProducts = async () => {
  let sql = "select * from SanPham sp where TrangThai = 1";
  let [result, fields] = await connection.query(sql);
  return result;
};

const getAllProductsNgungBan = async () => {
  let sql = "select * from SanPham sp where TrangThai = 0";
  let [result, fields] = await connection.query(sql);
  return result;
};

const getProductById = async (IDSanPham) => {
  let sql = "select * from SanPham sp where IDSanPham = ?";
  let [result, fields] = await connection.query(sql, [IDSanPham]);
  let product = result && result.length > 0 ? result[0] : {};
  return product;
};

const addProduct = async (TenMon, IDDanhMuc, MoTa, GiaBan, TrangThai) => {
  let sql = `insert into SanPham(TenMon,IDDanhMuc,MoTa,GiaBan,TrangThai) 
                values(?,?,?,?,?)`;

  let [result, fields] = await connection.query(sql, [
    TenMon,
    IDDanhMuc,
    MoTa,
    GiaBan,
    TrangThai,
  ]);

  return result;
};

const updateProduct = async (TenMon, IDDanhMuc, MoTa, GiaBan, IDSanPham) => {
  let sql =
    "update SanPham set TenMon = ?, IDDanhMuc = ?, MoTa = ?, GiaBan = ? where IDSanPham = ?";

  let [result, fields] = await connection.query(sql, [
    TenMon,
    IDDanhMuc,
    MoTa,
    GiaBan,
    IDSanPham,
  ]);

  return result;
};

const delProduct = async (IDSanPham) => {
  let sql = "update SanPham set TrangThai = 0 where IDSanPham = ?";
  let [result, fields] = await connection.query(sql, [IDSanPham]);

  return result;
};

const updateBanLaiSanPham = async (IDSanPham) => {
  let sql = "update SanPham set TrangThai = 1 where IDSanPham = ?";
  let [result, fields] = await connection.query(sql, [IDSanPham]);

  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  delProduct,
  getAllProductsNgungBan,
  updateBanLaiSanPham,
};
