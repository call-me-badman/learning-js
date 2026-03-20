# Back-End API

A RESTful back-end API built to power the application's core functionality.


### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running database instance (e.g., PostgreSQL / MongoDB)

### Installation

```bash
# Clone the repository
git clone https://github.com/irakoze-olga/back-end.git
cd back-end

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

### Running the Server

```bash
# Development
npm run dev

# Production
npm start
```

## 📁 Project Structure

```
back-end/
├── src/
│   ├── controllers/   # Route handlers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   └── index.js       # Entry point
├── .env.example
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** (e.g., PostgreSQL / MongoDB)
- **Authentication:** JWT

## 📬 API Endpoints

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | `/api/...`     | Fetch resources      |
| POST   | `/api/...`     | Create a resource    |
| PUT    | `/api/...`     | Update a resource    |
| DELETE | `/api/...`     | Delete a resource    |

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

## 📄 License
