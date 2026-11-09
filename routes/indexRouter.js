import { Router } from "express";
import * as indexController from "../controllers/indexController.js";




const indexRouter = Router();

indexRouter.get("/", indexController.getMessages);
indexRouter.get("/new", indexController.getNewMessageForm);


export {indexRouter};