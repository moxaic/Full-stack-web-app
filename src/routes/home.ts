import { Router } from "express";

import { renderHomePage } from "../controllers/home";

const route = Router();

route.get("/", renderHomePage);

export default route;
