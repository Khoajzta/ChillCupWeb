const connection = require("../config/database");
const getAllProducts = async () => {
  let sql = "select * from SanPham sp";
  let [result, fields] = await connection.query(sql);
  return result;
};

module.exports = {
  getAllProducts,
};
