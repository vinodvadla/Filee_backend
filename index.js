require("dotenv").config();
const express = require("express");
const { sequelize } = require("./src/models");
const app = express();
const PORT = process.env.PORT || 3000;
const router = require("./src/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.use((err, req, res, next) => {
  let status = 500 || err.status;
  res.status(status).json({
    success: false,
    message: err.message || "Something Went wrong at Server",
  });
});

sequelize.sync({ alter: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
