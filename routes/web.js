import express from "express";
import webController from "../controllers/web.js";

const webRouter = express.Router();

webRouter.get("/", webController.home);
webRouter.get("/about", webController.about);
webRouter.get("/cfp", webController.call_for_papers);
webRouter.get("/contact", webController.contact);
webRouter.get("/speakers", webController.speakers);
webRouter.get("/committees", webController.committees);
webRouter.get("/gallery", webController.gallery);
webRouter.get("/registration", webController.registration);
webRouter.get("/submission", webController.submission);

export default webRouter;
