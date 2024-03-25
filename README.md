# Quotes App

Welcome to the Quotes App repository! This web application allows users to perform CRUD (Create, Read, Update, Delete) operations on quotes. The app is built using MongoDB for data storage, Node.js for server-side scripting with Express.js, and React.js for the frontend. Various tools and libraries such as Axios, react-router-dom, react hooks, Vite.js, webpack, cors, dotenv, and nodemon are also utilized in the development process.

## Features

- **CRUD Operations:** Users can create, read, update, and delete quotes.
- **MongoDB Integration:**Harnesses the power of MongoDB for efficient data storage and retrieval, coupled with Mongoose for seamless schema validation. 
- **RESTful API:** Employs a robust RESTful API architecture, ensuring smooth interactions with your quote database.
- **Express.js Server:** Leverages the versatility of Express.js for streamlined routing and server-side logic.
- **React.js Frontend:** Frontend: Crafted with React.js, providing an immersive user experience enriched with dynamic features.
- **Client-side Routing:** Navigates effortlessly through the app with react-router-dom for smooth client-side routing.
- **State Management:** Utilizes the power of React hooks for efficient state management within components.
- **Webpack and Vite.js:** Employs modern build tools for bundling and compiling frontend assets.
- **HTTP Requests:** Makes use of Axios for seamless communication between frontend and backend.
- **Cross-Origin Resource Sharing (CORS) and Environment Variables (dotenv):** Ensures secure cross-origin resource sharing and streamlined environment variable management.
- **Nodemon:** Monitors changes in the backend code and automatically restarts the server.

## Technologies & Tools Used

### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for making requests to the backend API.
- **React Router DOM:** A library for declarative routing in React applications.
- **React Hooks:** Allows functional components to manage state and side effects.
- **Vite.js and Webpack:** Build tools for bundling and compiling frontend assets.

### Backend

- **Node.js:** A JavaScript runtime for server-side development.
- **Express.js:** A web application framework for Node.js, used for building the backend API.
- **MongoDB:** A NoSQL database used for storing quote data.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Cors:** A Node.js package for enabling cross-origin resource sharing.
- **Dotenv:** A zero-dependency module that loads environment variables from a .env file into process.env.

## Installat  ion
   
1. Clone the repository to your local machine:
git clone https://github.com/Ramcodere/quotes-app.git

2. Navigate to the project directory:
cd quotes-app


3. Install dependencies for both frontend and backend:
cd frontend
npm install
cd ../backend
npm install


4. Create a `.env` file in the backend directory and specify your MongoDB connection string:
MONGODB_URI=your_mongodb_connection_string
PORT=8000


5. Start the development servers:
cd frontend
npm run dev
cd ../backend
npm start


6. Open your browser and navigate to http://localhost:8000 to view the Quotes App.

## Deployment

To deploy the Quotes App, follow these steps:

1. Build the frontend:
cd frontend
npm run dev


2. Copy the contents of the build directory to your web server or hosting provider.

3. Ensure that the backend server is running with the appropriate environment variables set.

4. Access your deployed Quotes App through the provided URL.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests with your enhancements or bug fixes.

## Support

For any questions or issues, please contact at (mailto:ramkushram120@gmail.com).
