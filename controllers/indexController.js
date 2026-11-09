import { messages } from "../data/messages.js";

function getMessages(req, res){
    res.render("index",{messages})
}

export {getMessages};