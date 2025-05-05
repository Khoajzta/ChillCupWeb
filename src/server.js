require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const app = express();

const port = process.env.PORT;
// Cấu hình view folder và view engine
configViewEngine(app);

//khai báo route
app.use("/", webRoutes);

// Server listen
app.listen(port, () => {
  console.log(`Server đang chạy với port ${port}`);
});
