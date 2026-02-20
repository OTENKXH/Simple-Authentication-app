📌 Simple Authentication App (Next.js + MongoDB)

A simple full-stack Next.js authentication app with protected Todo list functionality.

This project demonstrates:

✔ User signup & login
✔ JWT authentication with cookies
✔ Protected server-side rendering (SSR) pages
✔ Simple CRUD for todos
✔ MongoDB as the database

📁 Repository

https://github.com/OTENKXH/Simple-Authentication-app

🚀 Features

🔐 Signup & Login

🍪 JWT stored in httpOnly cookies

📋 Protected Todos page

🗂 API routes using Next.js

📦 Mongoose for MongoDB interaction

🛠 Client + Server working together (Full-Stack)

🛠 Tech Stack
Layer Technology
Framework Next.js 14
Frontend React
Database MongoDB
ORM Mongoose
Auth JSON Web Tokens
Icons FontAwesome / React Icons
Passwords bcryptjs
🚀 Getting Started

1. Clone the repository
   git clone https://github.com/OTENKXH/Simple-Authentication-app.git
2. Install dependencies
   cd Simple-Authentication-app
   npm install
3. Add environment variables

Create a .env file in the root:

MONGODB_URI=your_mongodb_connection_string
JWT_PRIVATE_KEY=your_secret_key 4. Run the app
npm run dev

Open http://localhost:3000
in your browser.

📌 Project Structure
├── /models
│ ├── Todo.js
│ └── User.js
├── /pages
│ ├── /api
│ │ ├── auth
│ │ │ ├── signin.js
│ │ │ └── signup.js
│ │ └── todos.js
│ ├── index.js
│ ├── signin.js
│ └── todos.js
├── /utils
│ ├── auth.js
│ └── db.js
├── .gitignore
├── package.json
└── README.md
🔐 How Authentication Works

User signs up / signs in

Server validates and issues a JWT

JWT is stored in an HTTP-only cookie

Protected pages validate this token on the server side

Unauthenticated users are redirected to login

🧪 Todos

Todos are linked to the logged-in user

Stored in MongoDB with a user reference

Displayed only after authentication

❓ Notes

✔ Environment variables are required.
✔ This app is for learning & practice.
✔ Change JWT_SECRET for production use.

📌 License

This project is open-source and free to use.

🙌 Thanks for checking out this project!

Feel free to fork ⭐ and use it as a learning template.
