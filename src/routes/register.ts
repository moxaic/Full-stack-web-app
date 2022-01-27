import { Router } from "express";

import {
  renderEmailVerificationPage,
  renderRegistrationPage,
  registerUser,
} from "../controllers/register";

const route = Router();

route.get("/", renderRegistrationPage);
route.get("/verify_email", renderEmailVerificationPage);

route.post("/", registerUser);

export default route;
