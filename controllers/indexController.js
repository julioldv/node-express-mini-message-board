import { messages } from "../data/messages.js";
import { validationResult } from "express-validator";

function getMessages(req, res){
    res.render("index",{messages})
}

function getNewMessageForm(req,res){
    res.render("new");
}

function createMessage(req, res) {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const { user, text } = req.body;
    messages.push({ text: text, user: user, added: new Date() });
    res.redirect("/");
}
export {getMessages, getNewMessageForm, createMessage};