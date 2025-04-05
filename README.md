# MERN eshop showcase Project

This is a full-stack MERN (MongoDB, Express, React, Node.js) application built as part of a crash course. The project demonstrates how to create a backend API with Node.js and Express, connect to a MongoDB database, and integrate it with a React frontend.

---

## Features

- **Backend**:

  - RESTful API built with Express.js.
  - MongoDB database connection using Mongoose.
  - Environment variable management with `dotenv`.

- **Frontend**:

  - React-based user interface (if applicable).
  - State management and API integration.

- **Development Tools**:
  - Nodemon for live server reloading.
  - Styled console logs using `colors`.

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-crash-course.git
   cd mern-crash-course

   ```

2. Install dependencies for both the backend and frontend:

# Backend

    cd backend
    npm install

# Frontend (if applicable)

    cd ../frontend
    npm install

3. Create a .env file in the backend directory and add the following:
   MONGO_URI=your_mongo_connection_string
   PORT=5000

## Usage

Running the Backend

1. Navigate to the backend directory:
   cd backend
2. Start the server:
   npm start
3. The backend server will run at http://localhost:5000.
   Running the Frontend (if applicable)
4. Navigate to the frontend directory:
   cd frontend
5. Start the React development server:
   npm start
6. The frontend will run at http://localhost:3000.

## Folder Structure

mern-crash-course/
├── backend/
│ ├── config/ # Database configuration
│ ├── controllers/ # API controllers
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ ├── server.js # Main server file
│ └── .env # Environment variables (ignored by Git)
├── frontend/ # React frontend (if applicable)
├── .gitignore # Ignored files and directories
└── README.md # Project documentation

## Scripts

Backend
npm start: Start the backend server.
npm run dev: Start the backend server with live reloading (using nodemon).
Frontend (if applicable)
npm start: Start the React development server.

Technologies Used

Backend:

Node.js
Express.js
MongoDB
Mongoose
dotenv
colors

Frontend (if applicable):

React.js
Axios (for API requests)

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Acknowledgments

This project was created as part of a MERN crash course.
Special thanks to the course instructor and contributors.
