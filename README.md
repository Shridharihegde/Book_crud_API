# Book_crud_API

This repository contains a backend application built with Node.js and MongoDB for managing books. It provides CRUD (Create, Read, Update, Delete) API endpoints for interacting with book data.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository to your local machine:

bash
git clone https://github.com/Shridharihegde/Book_crud_API
cd Book_crud_API


2. Install dependencies:

bash
npm install


3. Start the server:

bash
nodemon server


The server will start on http://localhost:3000 by default.

## API Endpoints

The following API endpoints are available:

- GET /api/book: Retrieve all books.
- GET /api/book/:id: Retrieve a book by ID.
- POST /api/book: Create a new book.
- PUT /api/book/:id: Update a book by ID.
- DELETE /api/book/:id: Delete a book by ID.

## Postman Collection

A Postman collection is provided (Book-API.postman_collection.json) with pre-configured requests for testing the API endpoints. Import the collection into Postman and execute the requests to interact with the API.

Please ensure to include the Book-API.postman_collection.json file in your repository as mentioned in the README.md. Let me know if you need further assistance or if there's anything else I can help you with!
