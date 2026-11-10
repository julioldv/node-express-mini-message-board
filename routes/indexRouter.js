import { Router } from "express";
import * as indexController from "../controllers/indexController.js";
import { body } from "express-validator";

const validateMessage = [
    body("user")
     .isString()
     .withMessage("Author must be text")
     .bail()
     .trim()
     .notEmpty()
     .withMessage("User can't be empty")
     .isLength({max: 50})
     .withMessage("Author must be at most 50 characters"),
    
    body("text")
     .isString()
     .withMessage("Message must be text")
     .bail()
     .trim()
     .notEmpty()
     .withMessage("Message cannot be empty")
     .isLength({max: 1000})
     .withMessage("Message must be at most 1000 characters"),
];

const indexRouter = Router();

indexRouter.get("/", indexController.getMessages);
indexRouter.get("/new", indexController.getNewMessageForm);
indexRouter.post("/new", validateMessage, indexController.createMessage);
indexRouter.get("/messages/:messageId", indexController.getMessageById);

export {indexRouter};