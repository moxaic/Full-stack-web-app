import { Request, Response } from "express";

export const renderLoginPage = (req: Request, res: Response) => {
  res.status(200).render("login", { title: "Login", stylesheets: ["auth"] });
};
