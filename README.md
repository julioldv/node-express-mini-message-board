# Mini Message Board

A simple server-rendered message board built with **Node.js, Express, and EJS** as part of [The Odin Project](https://www.theodinproject.com/)'s Node.js curriculum.

Users can view messages, submit new ones, and open individual message pages. The application uses an in-memory data store and server-side validation to handle form submissions.

## Features

- View messages with their author, content, and timestamp.
- Submit new messages through an HTML form.
- Validate and sanitize user input using `express-validator`.
- Display validation errors while preserving previously entered form values.
- Open individual messages through unique UUID-based URLs.
- Handle nonexistent messages with HTTP 404 responses.
- Redirect after successful form submissions using the Post/Redirect/Get pattern.

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express** — Web server, routing, and middleware
- **EJS** — Server-side HTML templates
- **express-validator** — Input validation and sanitization
- **HTML** — Page structure and forms

## Getting Started

### Prerequisites

- Node.js (a recent version supporting `import.meta.dirname`)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/julioldv/node-express-mini-message-board.git
   cd mini-message-board
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at:

   http://localhost:3000

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the server in watch mode |
| `npm start` | Starts the server normally |

The server uses port `3000` by default. You can override it by setting the `PORT` environment variable.

## Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Display all messages |
| GET | `/new` | Display the new-message form |
| POST | `/new` | Validate and create a message |
| GET | `/messages/:messageId` | Display an individual message |

## Project Structure

```text
mini-message-board/
├── controllers/
│   └── indexController.js
├── data/
│   └── messages.js
├── routes/
│   └── indexRouter.js
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── message.ejs
├── app.js
├── package.json
└── README.md
```

## Data Storage

Messages are stored in an in-memory JavaScript array. Each message contains:

- A unique UUID
- The author's name
- The message content
- A creation timestamp

**Data is not persisted.** Messages added by users are lost when the server restarts, and the initial sample messages are recreated.

## What I Learned

This project helped me practice:

- Organizing an Express application using routers and controllers.
- Rendering dynamic HTML with EJS.
- Processing HTML form submissions with Express middleware.
- Validating and sanitizing untrusted user input.
- Handling validation errors in server-rendered forms.
- Using dynamic route parameters and UUIDs to identify resources.
- Applying the Post/Redirect/Get pattern after successful submissions.

## Acknowledgments

Built as part of [The Odin Project — Mini Message Board](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) assignment.