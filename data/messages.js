import { randomUUID } from "node:crypto";

const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

export { messages };