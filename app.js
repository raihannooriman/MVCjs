import express from "express";
import * as path from "path";
import { routerUser } from "./src/routes/user.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

app.use("/user", routerUser);

app.listen(port, () => {
  console.log("server run localhost:3000");
});
