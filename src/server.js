require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const mysql = require("mysql2");

const app = express();
const port = process.env.PORT;
// Cấu hình view folder và view engine
configViewEngine(app);

//khai báo route
app.use("/", webRoutes);

const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  database: "ChillCup",
  password: "123456",
});

connection.query("select * from SanPham sp", function (err, results, fields) {
  console.log(">>>results", results);
  console.log(">>>fields = ", fields);
});

// Server listen
app.listen(port, () => {
  console.log(`Server đang chạy với port ${port}`);
});
