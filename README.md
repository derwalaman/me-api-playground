
# 🚀 Me – API Playground

A full-stack **API Playground application** built using **Next.js (App Router)** that stores a candidate profile in a database and exposes it through a clean REST API with a built‑in frontend API tester.

This project was developed as part of an **intern backend assessment**.

---

## 🌐 Live Demo

Frontend + Backend (single app):

👉 **https://your-vercel-url.vercel.app**

GitHub Repository:

👉 **https://github.com/yourusername/me-api-playground**

---

## 🧠 Architecture

```
Next.js App Router
│
├── Frontend Dashboard (React + Tailwind)
│
├── API Routes (Backend)
│   ├── /api/profile
│   ├── /api/projects
│   ├── /api/skills/top
│   ├── /api/search
│   └── /api/health
│
└── MongoDB Atlas (Database)
```

- **Frontend & Backend** in a single Next.js app  
- **REST APIs** built using route handlers  
- **MongoDB** used as persistent storage  
- **Fully testable from frontend (no Postman required)**  

---

## 🧰 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | Next.js 14 (App Router) |
| Backend | Next.js API Routes |
| Database | MongoDB Atlas |
| ORM | Mongoose |
| Styling | Tailwind CSS |
| Hosting | Vercel |
| Language | JavaScript |

---

## 📦 Database Schema

### Profile Document

```json
{
  "name": "string",
  "email": "string",
  "education": "string",

  "skills": ["string"],

  "projects": [
    {
      "title": "string",
      "description": "string",
      "links": ["string"]
    }
  ],

  "work": ["string"],

  "links": {
    "github": "string",
    "linkedin": "string",
    "portfolio": "string"
  }
}
```

---

## 🔗 API Endpoints

### ❤️ Health

```
GET /api/health
```

Response:
```json
{
  "status": "ok"
}
```

---

### 👤 Profile

#### Get Profile
```
GET /api/profile
```

#### Create Profile (first time)
```
POST /api/profile
```

#### Update Profile
```
PUT /api/profile
```

---

### 🚀 Projects

#### Get all projects
```
GET /api/projects
```

#### Search projects
```
GET /api/projects?skill=javascript
```

Search is case‑insensitive and works on:
- title
- description
- links

---

### 🧠 Skills

```
GET /api/skills/top
```

Returns top skills from profile.

---

### 🔍 Global Search

```
GET /api/search?q=next
```

Searches across:
- skills
- projects

---

## 🧪 Built‑in API Tester

This project includes a **frontend API testing panel**.

From the UI you can:

- Select HTTP method (GET / POST / PUT)
- Enter API endpoint
- Provide JSON body
- View status code
- View raw JSON response

➡️ No Postman or curl required.

---

## 🖥️ Frontend Features

- Dashboard layout
- Sidebar navigation
- Full profile viewer
- Profile editor (CRUD)
- Add / edit / delete projects
- Work experience editor
- Links editor
- Live API tester
- Responsive UI

---

## ⚙️ Local Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/me-api-playground.git
cd me-api-playground
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Environment Variables

Create `.env.local`

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/me-api
```

---

### 4️⃣ Run Locally

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🌱 Sample API Payload

```json
{
  "name": "Abhishek",
  "email": "abhishek@gmail.com",
  "education": "B.Tech Computer Science",

  "skills": [
    "JavaScript",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Python"
  ],

  "projects": [
    {
      "title": "CodeAxa",
      "description": "LeetCode-style coding platform",
      "links": ["https://github.com/yourrepo"]
    }
  ],

  "work": [
    "Full Stack Developer Intern"
  ],

  "links": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "portfolio": "https://yourportfolio.com"
  }
}
```

---

## 🚀 Deployment

The application is deployed using **Vercel**.

Steps:

1. Push code to GitHub
2. Import repository into Vercel
3. Add environment variable
4. Deploy

Both frontend and backend are deployed together.

---

## ⚠️ Known Limitations

- Single-user profile (no authentication)
- No role-based access
- No pagination
- Basic validation only

These limitations were intentional to keep the assessment simple.

---

## 📄 Resume

👉 **https://drive.google.com/your-resume-link**

---

## ✅ Assessment Coverage

✔ CRUD APIs  
✔ Query endpoints  
✔ Proper database  
✔ Schema documentation  
✔ Real seeded data  
✔ Frontend UI  
✔ Hosted solution  
✔ Working URLs  
✔ API documentation  

---

## 👨‍💻 Author

**Name:** Abhishek  
**Role:** Full Stack Developer  
**Email:** abhishek@gmail.com  

---

## ⭐ Final Note

This project demonstrates:

- REST API design
- Database modeling
- Backend development
- Frontend integration
- Clean architecture
- Real‑world engineering workflow

Thank you for reviewing this assessment 🙏
