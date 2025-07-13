
# 📚 My Library Frontend

This is the **Frontend** for the **My Library App**, built with **React**, **Chakra UI**, **React Router**, and **Axios**.  
It allows users to browse books, manage their reading list, and update their profile.

---

## 🚀 Features

✅ User Signup / Login / Logout (JWT Auth)  
✅ Browse all books (from MongoDB)  
✅ Add books to "My Books" (Want to Read)  
✅ Manage reading status and rating  
✅ Profile view and edit  
✅ Responsive Chakra UI design  
✅ Dark mode toggle  
✅ Protected routes

---

## 📂 Project Structure

```
/src
 ├── components/
 │   ├── Navbar.jsx
 │   ├── BookCard.jsx
 │   └── AllRoutes.jsx
 ├── pages/
 │   ├── HomePage.jsx
 │   ├── MyBooksPage.jsx
 │   ├── SignupPage.jsx
 │   ├── LoginPage.jsx
 │   ├── ProfilePage.jsx
 │   └── NotFoundPage.jsx
 ├── context/
 │   └── AuthContextProvider.jsx
 ├── services/
 │   └── api.js
 ├── App.jsx
 ├── main.jsx
```

---

## ⚙️ Installation

1. **Clone the repo**
   ```bash
   git clone <https://github.com/Ritesh-kumar-jena/Library>
   cd Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   npm run dev
   ```


---

## 🔑 Environment

- Uses `localStorage` to store JWT token.
- Axios interceptor automatically adds the token to requests.
- `api.js` is pre-configured with your backend base URL.

---

## 🗃️ API Endpoints Used

- `POST /users/signIn` — Register user
- `POST /users/login` — Login user
- `GET /users/profile/:id` — Get profile data
- `PATCH /users/edit/:id` — Edit profile
- `GET /books` — Get all books
- `GET /mybooks` — Get user’s books
- `POST /mybooks/:bookId` — Add book to My Books
- `PATCH /mybooks/:bookId/status` — Update reading status
- `PATCH /mybooks/:bookId/rating` — Update rating
- `GET /users/logout` — Logout user

---

## ✅ Notes

- **AuthContextProvider** checks token validity on page load.
- Protected routes ensure only logged-in users can manage books & profile.
- My Books page lets users update status and rating easily.

---

## 🛠️ Tech Stack

- **React 19**
- **Chakra UI**
- **React Router DOM**
- **Axios**
- **Framer Motion**
- **JWT Decode**

---

## 🧑‍💻 Author

- Developed by **Ritesh Kumar Jena**
- Feel free to improve & contribute!

---

## 📄 License

This project is licensed under the **MIT License**.
