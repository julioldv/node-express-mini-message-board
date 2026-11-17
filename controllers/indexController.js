import { validationResult } from "express-validator";
import {
    getAllMessages,
    getMessageById as getMessageByIdDB,
    createMessage as createMessageDB
} from "../db/queries.js";

async function getMessages(req, res){
    const messages = await getAllMessages();
    res.render("index",{messages});
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

async function createMessage(req, res) {
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

  const messageData = {
    author: user,
    text,
  };

  await createMessageDB(messageData);

  return res.redirect(303, "/");
}

async function getMessageById(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(404).send("Message not found");
    }

    const requestedId = req.params.messageId;
    const message = await getMessageByIdDB(requestedId);

    if (!message) {
        return res.status(404).send("Message not found");
    }

    return res.render("message", { message });
}
export {getMessages, getNewMessageForm, createMessage, getMessageById};