# MERN Project(Our Blog)

This is a MERN (MongoDB, Express.js, React.js, Node.js) project for a blogging application.

## Project Structure

The project consists of two main parts: the API server and the client application.

### API

The API is responsible for handling user authentication, post creation, editing, and retrieval. It uses the following technologies and libraries:

- Node.js and Express.js for the server-side implementation
- MongoDB for the database
- Mongoose as the MongoDB object modeling tool
- bcryptjs for password hashing
- jsonwebtoken for user authentication and token generation
- cookie-parser for handling cookies
- multer for file uploading
- cors for cross-origin resource sharing

The API's main files and folders include:

- `server.js`: The main server file that sets up the Express.js server and handles routing and middleware configuration.
- `models/User.js`: The User model for managing user data in the database.
- `models/Post.js`: The Post model for managing blog post data in the database.
- `uploads/`: The folder where uploaded files are stored.
- API routes: Various routes for user registration, login, profile retrieval, post creation, editing, and retrieval.

### Client

The client application is built using React.js and interacts with the API to display blog posts, allow user registration and login, and enable post creation and editing. It utilizes the following libraries and dependencies:

- React.js for building the user interface
- react-router-dom for client-side routing
- react-quill for rich text editor functionality
- date-fns for date formatting

The client's main files and folders include:

- `src/App.js`: The main entry point of the client application, where the routing is defined.
- `src/components/`: Various components used to compose the user interface.
- `src/pages/`: React components that represent different pages of the application, such as the home page, login page, register page, post page, and edit post page.
- `src/UserContext.js`: A React context for managing user authentication and sharing user information across components.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies for the API: `cd api && yarn install`
3. Start the API server: `yarn start`
4. Install dependencies for the client: `cd ../client && yarn install`
5. Start the client application: `yarn start`

The API server will run on `http://localhost:4000`, and the client application will be accessible at `http://localhost:3000`.

Make sure to have MongoDB installed and running locally or provide the appropriate MongoDB connection URI in the API's `server.js` file.

## Available Scripts

In the `api` directory, you can run the following commands:

- `yarn start`: Starts the API server in production mode.
- `yarn dev`: Starts the API server in development mode using nodemon.

In the `client` directory, you can run the following commands:

- `yarn start`: Starts the client application in development mode.
- `yarn build`: Builds the client application for production.
