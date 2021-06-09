const path = require("path");
const fs = require("fs");

const express = require("express");
const app = express();

const { setStatics } = require("./utils/statics");
const adminRoute = require("./routes/routsManager");
const errorController = require("./controllers/404");

//encoding received data
app.use(express.urlencoded({ extended: false }));

//EJS
app.set("view engine", "ejs");
app.set("views", "views");

//statics
setStatics(app);
app.use(adminRoute);
app.use(errorController.get404);

app.listen(3000, () => console.log("server is running"));
