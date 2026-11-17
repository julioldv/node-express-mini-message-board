import { pool } from "./pool.js";
import { randomUUID } from "node:crypto";

async function getAllMessages() {
    const { rows } = await pool.query(
        'SELECT id, author AS "user", text, added FROM messages'
    );

    return rows;
}

async function getMessageById(id) {
    const { rows } = await pool.query(
        'SELECT id, author AS "user", text, added FROM messages WHERE id = $1', [id]
    );

    return rows[0];
}



async function createMessage(messageData) {
    const id = randomUUID();

    const result = await pool.query(
        "INSERT INTO messages (id, author, text) VALUES ($1, $2, $3) RETURNING *",
        [id, messageData.author, messageData.text]
    );

    return result.rows[0];
}

export { getAllMessages, getMessageById, createMessage };