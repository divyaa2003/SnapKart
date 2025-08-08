
````markdown
# 🛒 SnapKart — AI powered Online Grocery Platform -MERN Stack 

SnapKart is a full-stack e-commerce platform   
It includes **secure authentication**, **product uploads**, **category management**, and a **responsive UI**, making it a complete grocery shopping solution.

---

## 🚀 Features

- **👤 User Authentication**
  - Access & Refresh token authentication
  - OTP-based email verification
  - Password recovery system

- **🛍️ Product Management**
  - Product uploads with images
  - Edit and delete products
  - Search & filter products

- **📂 Category Management**
  - Categories & subcategories
  - Admin dashboard for easy management

- **⚡ Voice Search**
  - Search products hands-free using Web Speech API

- **🛒 Shopping Cart**
  - Add/remove items
  - Quantity management

- **🖥️ Admin Panel**
  - Manage products, categories, and users
  - Secure admin routes

- **📱 Fully Responsive UI**
  - Works on desktop, tablet, and mobile

---

## 🏗️ Tech Stack

**Frontend:**
- React.js
- Redux Toolkit
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose

**Authentication:**
- Access & Refresh Tokens (JWT)
- OTP Email Verification
- Password Reset Flow

**Extra:**
- Web Speech API (Voice Search)
- Multer / Cloudinary for image uploads

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/divyaa2003/SnapKart.git
cd SnapKart
````

### 2️⃣ Install Dependencies

Backend:

```bash
cd backend
npm install
```

Frontend:

```bash
cd ../frontend
npm install
```

### 3️⃣ Setup Environment Variables

**Backend `.env`:**

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
REFRESH_TOKEN_SECRET=your_refresh_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
CLOUDINARY_URL=your_cloudinary_url
```

**Frontend `.env`:**

```
VITE_API_URL=http://localhost:5000
```

### 4️⃣ Run the App

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd ../frontend
npm run dev
```

---

## 📂 Folder Structure

```
SnapKart/
│
├── backend/
│   ├── config/         # DB & cloud setup
│   ├── controllers/    # Business logic
│   ├── middleware/     # Auth & error handling
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── pages/      # Page-level components
│   │   ├── redux/      # Redux store & slices
│   │   ├── assets/     # Images & icons
│   │   └── App.jsx
│
└── README.md
```

---

## 🗺️ Roadmap

* [x] User Authentication (Access & Refresh Tokens)
* [x] Voice Search
* [x] Admin Panel
* [x] Product & Category Management
* [ ] Payment Gateway Integration
* [ ] Deployment to Vercel (frontend) + Render (backend)

---

## 📜 License

This project is licensed under the MIT License.

