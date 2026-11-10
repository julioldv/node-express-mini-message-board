import { Router } from "express";
import * as indexController from "../controllers/indexController.js";
import { body } from "express-validator";

const validateMessage = [
    body("user")
     .isString()
     .withMessage("User must be a text")
     .trim()
     .notEmpty()
     .withMessage("User can't be empty"),
    
    body("text")
     .isString()
     .withMessage("Message must be a text")
     .trim()
     .notEmpty()
     .withMessage("Message can't be empty"),
];

const indexRouter = Router();

indexRouter.get("/", indexController.getMessages);
indexRouter.get("/new", indexController.getNewMessageForm);
indexRouter.post("/new", validateMessage, indexController.createMessage);

export {indexRouter};