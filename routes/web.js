import express from "express";
import webController from "../controllers/web.js";

const webRouter = express.Router();

webRouter.get("/", webController.home);
webRouter.get("/about", webController.about);

export default webRouter;
