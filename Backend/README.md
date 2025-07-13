
# 📚 Library Management Backend API

This is a simple **RESTful API** built with **Node.js**, **Express**, **MongoDB**, and **Mongoose** for managing:
- User authentication (Register, Login, Logout)
- JWT-based auth with token blacklisting
- Books catalog
- User’s personal bookshelf (`myBooks`) with status and rating.

## 🚀 Features

✅ **User Auth**
- Sign up (`/users/signIn`)
- Login (`/users/login`)
- Logout (`/users/logout`)
- View profile (`/users/profile/:id`)
- Edit profile, delete account

✅ **Books**
- List all books (`/books`)

✅ **MyBooks**
- Add a book to your shelf (`/mybooks/:bookId`)
- View your books (`/mybooks`)
- Update status (`/mybooks/:bookId/status`)
- Update rating (`/mybooks/:bookId/rating`)

✅ **JWT Auth Middleware**
- Protected routes with `auth` middleware.
- Token blacklist for logout security.

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (`jsonwebtoken`)
- Password hashing (`bcrypt`)
- Environment variables (`dotenv`)
- CORS

## 📁 Project Structure

📦 your-project/
 ┣ 📂 Controller/
 ┃ ┣ 📜 userRoutes.js
 ┃ ┣ 📜 bookRoutes.js
 ┃ ┗ 📜 myBookRoutes.js
 ┣ 📂 Model/
 ┃ ┣ 📜 userModel.js
 ┃ ┣ 📜 bookModel.js
 ┃ ┗ 📜 myBookModel.js
 ┣ 📂 Middelware/
 ┃ ┗ 📜 auth.js
 ┣ 📜 db.js
 ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 .env
 ┗ 📜 README.md

## 🗄️ Environment Variables

Create a `.env` file in your root:

port=5000
key=your_jwt_secret_key
database=your_mongodb_atlas_connection_string

## 🏃‍♂️ Run Locally

1. Install dependencies
   npm install

2. Run server
   nodemon index.js

3. Visit: `http://localhost:PORT`
   Replace `PORT` with your configured port.

## 🔑 API Endpoints

### ✅ Auth Routes (`/users`)

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | `/signIn`          | Register a new user      |
| POST   | `/login`           | Login and get JWT token  |
| GET    | `/logout`          | Logout and blacklist token |
| GET    | `/profile/:id`     | Get user profile (auth)  |
| PATCH  | `/edit/:id`        | Update user profile (auth) |
| DELETE | `/delete/:id`      | Delete user (auth)       |

### 📚 Book Routes (`/books`)

| Method | Endpoint | Description          |
| ------ | -------- | -------------------- |
| GET    | `/`      | Get all books        |

### 📚 MyBooks Routes (`/mybooks`) *(Protected)*

| Method | Endpoint                 | Description                        |
| ------ | ------------------------ | ---------------------------------- |
| GET    | `/`                      | Get your books                     |
| POST   | `/:bookId`               | Add a book to your shelf           |
| PATCH  | `/:bookId/status`        | Update book reading status         |
| PATCH  | `/:bookId/rating`        | Update book rating                 |

## 🔒 Authorization

Send JWT token in header:
Authorization: Bearer <token>

## 📝 Notes

- Make sure your MongoDB Atlas URI is whitelisted for your IP.
- Seed your `books` collection manually or with a script.
- Use Postman/Thunder Client for testing endpoints.

## 📣 Author

Built by **RItesh Kumar Jena**

If you need help, feel free to reach out. 🚀✨
