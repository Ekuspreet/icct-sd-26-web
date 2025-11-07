import express from "express";
import webController from "../controllers/web.js";

const webRouter = express.Router();

const routes = [
  { path: "/", handler: "home" },
  { path: "/about", handler: "about" },
  { path: "/cfp", handler: "call_for_papers" },
  { path: "/contact", handler: "contact" },
  { path: "/speakers", handler: "speakers" },
  { path: "/committees", handler: "committees" },
  { path: "/registration", handler: "registration" },
  { path: "/submission", handler: "submission" },
  { path: "/sponsorship", handler: "sponsorship" },
  { path: "/awards", handler: "awards" },
  { path: "/publications", handler: "publications" },
];

routes.forEach(({ path, handler }) => {
  webRouter.get(path, webController[handler]);
});

export default webRouter;
