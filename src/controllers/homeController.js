const getHomePage = (req, res) => {
  res.render("index");
};

const getProductDetail = (req, res) => {
  res.send("Đây là trang chi tiết sản phẩm");
};
module.exports = {
  getHomePage,
  getProductDetail,
};
