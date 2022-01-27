import { Request, Response } from "express";

export const renderHomePage = (req: Request, res: Response) => {
  res.status(200).render("home", { title: "Eagre" });
};
