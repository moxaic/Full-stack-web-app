import { Router } from "express";

import { renderLoginPage } from "../controllers/login";

const route = Router();

route.get("/", renderLoginPage);

export default route;
