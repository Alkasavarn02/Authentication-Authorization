### Authentication and Authorization
This project demonstrates a simple implementation of authentication and authorization using Node.js, Express.js, and MongoDB. It includes features for user registration, login, and access control based on roles.

## Features
User Registration: Users can create an account by providing their email, password, and other required details.
User Login: Registered users can log in using their email and password.
Password Hashing: Passwords are securely hashed before being stored in the database using bcrypt.
JWT Token Generation: Upon successful login, a JWT token is generated for the user to authenticate subsequent requests.
Role-Based Access Control: Users are assigned roles that determine their access level to certain routes and resources.
Protected Routes: Certain routes are protected and can only be accessed by authenticated users with the appropriate role.

## Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing user data.
Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
JWT (JsonWebToken): For securing endpoints with token-based authentication.
bcrypt: Library for hashing passwords.

Installation
Clone the repository:git clone https://github.com/Alkasavarn02/Authentication-Authorization.git

## User Registration
POST /api/v1/SignUP
Registers a new user.
Requires email and password in the request body.

## User Login
POST /api/v1/Login
Authenticates a user and returns a JWT token.
Requires email and password in the request body.

## Protected Route
GET /api/v1/Student or GET /api/v1/Admin
Accessed only by authenticated users with a valid JWT token.
# Usage
Register a new user via the /api/SignUp endpoint.
Log in using the /api/login endpoint to receive a JWT token.
Use the JWT token to access protected routes.

# License
This project is licensed under the MIT License. See the LICENSE file for details.
