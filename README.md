🎙️ Writer’s Room Podcast

Writer’s Room Podcast is a full-stack web application that allows users to browse and search a catalog of podcast episodes. The project focuses on clean architecture, modern JavaScript practices, and scalable API design.

Built as a portfolio-quality application, it demonstrates frontend–backend separation, RESTful API design, and readiness for production data persistence.

🚀 What This Project Demonstrates

Full-stack development with React + Node.js

Clean separation of concerns (client / server)

RESTful API design with Express

Modern JavaScript (ES Modules, async/await)

Scalable project structure used in production apps

Utility-first styling with Tailwind CSS

🧱 Tech Stack

Frontend

React

React Router

Tailwind CSS

JavaScript (ES6+)

Backend

Node.js

Express

ES Modules

dotenv

Nodemon

Database (In Progress)

MongoDB

Mongoose

📁 Project Structure
writersroom/
├── client/        # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── styles/
│       └── assets/
│
├── server/        # Node + Express API
│   └── src/
│       ├── server.js
│       ├── app.js
│       ├── routes/
│       ├── controllers/
│       ├── models/
│       └── config/
│
└── README.md

🛠️ Getting Started
Frontend
cd client
npm install
npm start


Runs at:
http://localhost:3000

Backend
cd server
npm install
npm run dev


Runs at:
http://localhost:5000

🔑 Environment Variables

Create server/.env:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/writersroom

🔗 API Design (Example)
Method	Endpoint	Purpose
GET	/api/episodes	Fetch all episodes
GET	/api/episodes/:number	Fetch episode by number
POST	/api/episodes	Create new episode

The API follows REST principles and is designed to scale with persistent storage.

🎨 UI & Styling

Tailwind CSS for rapid, consistent styling

Responsive layouts

Component-based UI design

📌 Roadmap

MongoDB persistence

Episode filtering & sorting

Favorites system

Authentication

Admin episode management

Production deployment

👨‍💻 Author

Virlendy “Nav” Volcy
Computer Science Graduate | Full-Stack Developer

💡 Recruiter Note

This project emphasizes clean architecture, maintainability, and real-world patterns over complexity. It is intentionally structured to reflect how production full-stack applications are built and maintained.