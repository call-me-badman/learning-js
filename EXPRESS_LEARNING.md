# Express.js Architecture & API Design

This log documents the core concepts and implementation details of my RESTful back-end development.

## 🏗️ Core Architecture
- **Middleware Pipeline**: Utilizing `app.use()` for global logging, JSON parsing, and CORS handling.
- **Routing Strategy**: Implementing modular route handlers using `express.Router` to keep `express.js` clean.
- **Request Lifecycle**: Understanding how the Request and Response objects interact within the event loop.

## 🛠️ Implementation Progress
- [x] **Server Setup**: Initialized Express with customized port configurations.
- [x] **JSON Handling**: Configured `express.json()` to process incoming payloads.
- [x] **Error Handling**: Built a centralized middleware to catch 404s and 500 server errors.

## 📝 Technical Notes
- **Dependencies**: Currently utilizing `express ^5.2.1` for the latest routing improvements.
- **Best Practice**: Always place error-handling middleware at the end of the stack.
