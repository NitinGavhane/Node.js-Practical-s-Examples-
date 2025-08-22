# Express Server Example

## Overview
This project is a basic **Express.js** server demonstrating common HTTP methods and status codes. It provides simple routes for GET, POST, PUT, PATCH, DELETE requests and showcases standard responses like redirects, success, errors, and resource creation.

## Requirements
- Node.js (v14 or higher recommended)  
- npm or yarn

## Installation
```bash
# Clone repository
git clone <repository-url>

# Navigate to project folder
cd <project-folder>

# Install dependencies
npm install


# Usage
Start the server with:
node index.js


The server runs on:
http://localhost:3000


# Available Routes

# GET
/ → returns "Home Page".
/register → returns 200 OK.
/login → returns 200 OK.
/not-found → returns 404 Not Found.
/error → returns 500 Internal Server Error.
/redirect → redirects to /login.

# POST
/submit → returns 201 Created.

# PUT
/update → returns 200 OK.

# PATCH
/modify → returns 200 OK.

# DELETE
/delete → returns 200 OK.


# Example with curl
# Home page
curl http://localhost:3000/

# Redirect
curl -i http://localhost:3000/redirect

# POST request
curl -X POST http://localhost:3000/submit

# DELETE request
curl -X DELETE http://localhost:3000/delete
