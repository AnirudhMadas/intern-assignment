🚀 TaskFlow – Scalable Web App with Authentication & Dashboard

TaskFlow is a full-stack web application built with React, Node.js, Express, and MongoDB Atlas.
It demonstrates JWT-based authentication, role-based access, and a dashboard with CRUD functionality, following best practices for security, scalability, and clean architecture.

📌 Features
🔐 Authentication & Authorization

User registration & login

JWT-based authentication

Role-based access control (User / Admin)

Secure password hashing using bcrypt

Protected routes (dashboard access requires login)

📊 Dashboard

Display logged-in user profile

CRUD operations on Tasks

Search & filter tasks

Logout flow

Responsive UI with TailwindCSS

🧱 Backend Capabilities

RESTful APIs with proper status codes

Input validation & error handling

MongoDB Atlas integration

Scalable folder structure

JWT middleware for protected routes

🛠️ Tech Stack
Frontend

React.js (Vite)

React Router DOM

Axios

TailwindCSS

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JSON Web Token (JWT)

bcryptjs

📁 Project Structure

taskflow/

├── backend/

│   ├── config/

│   │   └── db.js

│   ├── controllers/

│   │   ├── authController.js

│   │   └── taskController.js

│   ├── middleware/

│   │   ├── authMiddleware.js

│   │   └── roleMiddleware.js

│   ├── models/

│   │   ├── User.js

│   │   └── Task.js

│   ├── routes/

│   │   ├── authRoutes.js

│   │   └── taskRoutes.js

│   ├── server.js

│   └── .env

│

├── frontend/

│   ├── src/

│   │   ├── api/

│   │   │   └── api.js

│   │   ├── context/

│   │   │   └── AuthContext.jsx

│   │   ├── components/

│   │   │   └── ProtectedRoute.jsx

│   │   ├── pages/

│   │   │   ├── Login.jsx

│   │   │   ├── Register.jsx

│   │   │   └── Dashboard.jsx

│   │   ├── App.jsx

│   │   └── main.jsx

│   └── index.css

│

└── README.md


⚙️ Environment Variables

Create a .env file inside backend/:

PORT=5000

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskflow

JWT_SECRET=<your_random_secret_key>



⚠️ Do NOT commit .env to GitHub

▶️ Running the Project Locally
1️⃣ Backend Setup
cd backend
npm install
npm run dev


Backend runs at:

http://localhost:5000

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🔗 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/v1/auth/register	Register user
POST	/api/v1/auth/login	Login user
GET	/api/v1/auth/me	Get profile (protected)
GET	/api/v1/auth/users	Admin: get all users
Tasks (Protected)
Method	Endpoint	Description
POST	/api/v1/tasks	Create task
GET	/api/v1/tasks	Get user tasks
PUT	/api/v1/tasks/:id	Update task
DELETE	/api/v1/tasks/:id	Delete task
🧪 API Documentation

Postman / Thunder Client collection included

All endpoints tested with JWT authentication

🔐 Security Practices

Password hashing with bcrypt

JWT token validation middleware

Role-based access checks

Environment variable usage for secrets

CORS enabled

📈 Scalability Notes

This project can scale for production by:

Separating services (Auth, Tasks)

Adding Redis for caching

Implementing refresh tokens

Using load balancers (NGINX)

Containerizing with Docker

Deploying frontend & backend independently

🚀 Future Improvements

Role-based UI (Admin dashboard)

Pagination & sorting

File/image uploads

Refresh token implementation

Deployment on Vercel & Render

Unit & integration testing

🤝 Contributing

Contributions are welcome!
Fork the repository and submit a pull request.

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Anirudh Madas
Full Stack Developer (MERN)
