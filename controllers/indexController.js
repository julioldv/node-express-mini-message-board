import { text } from "express";
import { randomUUID } from "node:crypto";
import { messages } from "../data/messages.js";
import { validationResult } from "express-validator";

function getMessages(req, res){
    res.render("index",{messages})
}

function getNewMessageForm(req,res){
    res.render("new",{
        errors: [],
        values: {
            user: "",
            text: "",
        },
    });
}

function createMessage(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render("new", {
      errors: errors.array(),
      values: {
        user: typeof req.body?.user === "string" ? req.body.user : "",
        text: typeof req.body?.text === "string" ? req.body.text : "",
      },
    });
  }

  const { user, text } = req.body;

  messages.push({
    id: crypto.randomUUID(),
    text,
    user,
    added: new Date(),
  });

  return res.redirect(303, "/");
}

function getMessageById(req,res){

    const requestedId = req.params.messageId;
    const message = messages.find((msg) => msg.id === requestedId);
    
    if(!message){
        return res.status(404).send("Message not found");
    }

    res.render("message", { message });
}

export {getMessages, getNewMessageForm, createMessage, getMessageById};