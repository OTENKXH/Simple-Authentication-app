# 📌 Simple Authentication App (Next.js + MongoDB)

A simple full-stack **Next.js authentication app** with protected **Todo list functionality**.

This project demonstrates:

- ✔ User signup & login
- ✔ JWT authentication with cookies
- ✔ Protected server-side rendering (SSR) pages
- ✔ Simple Todo management
- ✔ MongoDB integration

---

## 🚀 Features

- 🔐 Signup & Login system
- 🍪 JWT stored in HTTP-only cookies
- 📋 Protected Todos page
- 🗂 API routes using Next.js
- 📦 MongoDB + Mongoose
- 🛠 Full-stack structure (Frontend + Backend)

---

## 🛠 Tech Stack

| Layer     | Technology                     |
| --------- | ------------------------------ |
| Framework | Next.js 14                     |
| Frontend  | React 18                       |
| Database  | MongoDB                        |
| ORM       | Mongoose                       |
| Auth      | JSON Web Tokens (jsonwebtoken) |
| Passwords | bcryptjs                       |
| Icons     | FontAwesome / React Icons      |

---

## 📂 Project Structure

├── models/<br/>
│ ├── User.js<br/>
│ └── Todo.js<br/>
├── pages/<br/>
│ ├── api/<br/>
│ │ ├── auth/<br/>
│ │ │ ├── signin.js<br/>
│ │ │ ├── signup.js<br/>
│ │ │ └── signout.js<br/>
│ │ └── todos.js<br/>
│ ├── signin.js<br/>
│ ├── signup.js<br/>
│ ├── todos.js<br/>
│ └── index.js<br/>
├── utils/<br/>
│ ├── auth.js<br/>
│ └── db.js<br/>
├── package.json<br/>
└── README.md<br/>

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

git clone https://github.com/OTENKXH/Simple-Authentication-app.git
2️⃣ Install dependencies
npm install
3️⃣ Create .env file

Create a .env file in the root folder:

MONGODB_URI=your_mongodb_connection_string
JWT_PRIVATE_KEY=your_secret_key
4️⃣ Run development server
npm run dev

Open:

http://localhost:3000
🔐 Authentication Flow

User signs up or logs in

Server validates credentials

JWT is generated and stored in HTTP-only cookie

Protected pages verify token using getServerSideProps

Unauthorized users are redirected to /signin

📋 Todos

Each todo is linked to a specific user

Stored in MongoDB

Accessible only after authentication

⚠️ Important Notes

.env file is ignored via .gitignore

This project is for learning purposes

Do not expose secret keys in public repositories

📌 Author

Hossein Keshavarz

⭐ Feel free to fork this repository and use it for learning!
