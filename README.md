# 💰 Banking Ledger API

A RESTful backend application for managing banking ledger operations. This project provides APIs to manage customers, accounts, and transactions using Node.js, Express.js, and MongoDB.

## 🚀 Features

- Customer Management
- Account Management
- Transaction Management
- RESTful API Architecture
- CRUD Operations
- MongoDB Database Integration
- Input Validation
- Error Handling
- Postman Tested APIs

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- Postman

## 📂 Project Structure

```
BACKEND-LEDGER/
│── models/
│── routes/
│── controllers/
│── middleware/
│── config/
│── utils/
│── app.js
│── package.json
│── .env
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/gryadav7/BACKEND-LEDGER.git
```

### Navigate to the project

```bash
cd BACKEND-LEDGER
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
MONGO_URI=your_mongodb_connection_string
PORT=8080
```

### Start the server

```bash
npm start
```

or

```bash
nodemon app.js
```

## 📌 API Endpoints

### Customers

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /customers | Get all customers |
| GET | /customers/:id | Get customer by ID |
| POST | /customers | Create customer |
| PUT | /customers/:id | Update customer |
| DELETE | /customers/:id | Delete customer |

---

### Accounts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /accounts | Get all accounts |
| POST | /accounts | Create account |
| PUT | /accounts/:id | Update account |
| DELETE | /accounts/:id | Delete account |

---

### Transactions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /transactions | Get all transactions |
| POST | /transactions | Create transaction |
| PUT | /transactions/:id | Update transaction |
| DELETE | /transactions/:id | Delete transaction |

## 📸 API Testing

The APIs were tested using **Postman** to verify request handling, CRUD functionality, and response validation.

## 🎯 Future Improvements

- JWT Authentication
- User Login & Registration
- Role-Based Access Control
- Pagination & Filtering
- Transaction History
- API Documentation using Swagger
- Docker Support

## 👨‍💻 Author

**Gangaram Yadav**

- GitHub: https://github.com/gryadav7

---

⭐ If you find this project useful, consider giving it a star on GitHub.
