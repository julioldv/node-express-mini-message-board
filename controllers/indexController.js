import { messages } from "../data/messages.js";

function getMessages(req, res){
    res.render("index",{messages})
}

function getNewMessageForm(req,res){
    res.render("new");
}

export {getMessages, getNewMessageForm};