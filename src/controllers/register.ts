import { Request, Response } from "express";

export const renderEmailVerificationPage = (req: Request, res: Response) => {
  res.status(200).render("verify_email", {
    title: "Verify Email",
    scripts: ["authFlow"],
    stylesheets: ["auth"],
  });
};

export const renderRegistrationPage = (req: Request, res: Response) => {
  res
    .status(200)
    .render("register", { title: "Register", stylesheets: ["auth"] });
};

export const registerUser = (req: Request, res: Response) => {
  console.log(req.body);
  res.redirect("/register/verify_email");
};
