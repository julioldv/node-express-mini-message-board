# Mini Message Board

A simple server-rendered message board built with **Node.js, Express, EJS, and PostgreSQL** as part of [The Odin Project](https://www.theodinproject.com/)'s Node.js curriculum.

Users can view messages, submit new ones, and open individual message pages. Messages are stored persistently in PostgreSQL, with server-side input validation and parameterized SQL queries.

## Live Demo

The application is deployed on Render.

[View the live application](https://mini-message-board-yrj7.onrender.com/)

**Note:** The demo uses a temporary database on Render's Free plan, so availability and stored data may be affected by the hosting plan's limitations.

## Features

- View messages with their author, content, and creation timestamp.
- Submit new messages through an HTML form.
- Persist messages in a PostgreSQL database.
- Validate and normalize user input using `express-validator`.
- Display validation errors while preserving previously entered form values.
- Open individual messages through unique UUID-based URLs.
- Return HTTP 404 responses for invalid or nonexistent message IDs.
- Use parameterized SQL queries for database operations.
- Redirect after successful form submissions using the Post/Redirect/Get pattern.

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express** — Web server, routing, and middleware
- **EJS** — Server-side HTML templates
- **PostgreSQL** — Relational database for persistent storage
- **node-postgres (`pg`)** — PostgreSQL client and connection pooling
- **express-validator** — Server-side input validation and normalization
- **HTML and CSS** — Page structure and styling

## Getting Started

### Prerequisites

- Node.js 20.11+ (supporting `import.meta.dirname` and `--env-file`)
- npm
- PostgreSQL installed and running
- A PostgreSQL role with permission to create and access a database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/julioldv/node-express-mini-message-board.git
   cd node-express-mini-message-board
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Create the PostgreSQL database:

   ```bash
   createdb mini_message_board
   ```

4. Initialize the database schema:

   ```bash
   psql -d mini_message_board -f db/schema.sql
   ```

5. Create a `.env` file in the project root and configure your PostgreSQL connection:

   ```dotenv
   PGHOST=localhost
   PGPORT=5432
   PGDATABASE=mini_message_board
   PGUSER=your_postgresql_role
   PGPASSWORD=your_postgresql_password
   ```

   Replace the placeholder values with your local PostgreSQL credentials.

   The `.env` file is excluded from version control to prevent committing database credentials.

6. Start the development server:

   ```bash
   node --env-file=.env --watch app.js
   ```

7. Open your browser at:

   http://localhost:3000

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the server in watch mode |
| `npm start` | Starts the server normally |

When using the local `.env` file, load it explicitly with Node.js's `--env-file=.env` option, as shown above.

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
node-express-mini-message-board/
├── controllers/
│   └── indexController.js
├── db/
│   ├── pool.js
│   ├── queries.js
│   └── schema.sql
├── routes/
│   └── indexRouter.js
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── message.ejs
├── public/
│   └── styles.css
├── app.js
├── package.json
└── README.md
```

## Data Storage

Messages are stored in a PostgreSQL database rather than an in-memory JavaScript array.

Each message contains:

- `id` — A unique UUID identifying the message
- `author` — The name of the person who submitted it
- `text` — The message content
- `added` — A timestamp indicating when the message was created

The database schema is defined in `db/schema.sql`.

Database access is organized into two modules:

- **`db/pool.js`** — Configures a reusable PostgreSQL connection pool.
- **`db/queries.js`** — Contains functions for retrieving and creating messages using SQL queries.

The application uses parameterized queries to safely pass values to PostgreSQL.

**Messages persist across application restarts.** Unlike the original in-memory implementation, stored messages are not lost when the Node.js process stops.

## What I Learned

This project helped me practice:

- Organizing an Express application using routers and controllers.
- Rendering dynamic HTML with EJS.
- Processing HTML form submissions with Express middleware.
- Validating and normalizing untrusted user input.
- Handling validation errors in server-rendered forms.
- Using dynamic route parameters and UUIDs to identify resources.
- Applying the Post/Redirect/Get pattern after successful submissions.
- Designing and creating tables in PostgreSQL.
- Connecting Node.js applications to PostgreSQL using `pg`.
- Managing database connections with a connection pool.
- Executing asynchronous database queries with `async/await`.
- Writing parameterized SQL queries to prevent SQL injection.
- Separating database-access logic from Express controllers.
- Migrating an application from in-memory storage to persistent database storage.

## Acknowledgments

Built as part of The Odin Project's [Mini Message Board](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) and [Using PostgreSQL](https://www.theodinproject.com/lessons/nodejs-using-postgresql) assignments.