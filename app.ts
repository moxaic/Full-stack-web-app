import express from "express";
import path from "path";

import { home, login, register } from "./src/routes";

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "pug");

app.use("/", home);
app.use("/login", login);
app.use("/register", register);

export default app;
