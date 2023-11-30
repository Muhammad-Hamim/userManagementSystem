# Mongoose Express CRUD Mastery

## Overview

This project is a Node.js Express application developed in TypeScript, integrating MongoDB with Mongoose for user data and order management. The application follows RESTful API conventions and includes CRUD operations for user management with additional bonus features for order management. The codebase adheres to coding quality standards, includes validation using Joi/Zod, and handles errors gracefully.

## Project Structure

- **src**: Contains the source code.
  - **controllers**: Implements the logic for handling HTTP requests.
  - **models**: Defines Mongoose models for User and Order.
  - **routes**: Contains route definitions for different API endpoints.
  - **middlewares**: Includes middleware functions for validation, error handling, etc.
  - **app.ts**: Entry point of the application.
- **dist**: Generated when building the project. Contains transpiled JavaScript files.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB server running.

### Installation

1. Clone the repository:

```

git clone <https://github.com/Muhammad-Hamim/userManagementSystem.git>

```

2. Install dependencies:

```

npm install

```

### Configuration

- Ensure that a MongoDB server is running.
- Update the MongoDB connection string in the `src/config/config.ts` file if necessary.

### Running the Application

- Development mode (with auto-reloading):

```
npm run start:dev
```

- Production mode:

```
npm run start:prod
```

# The application will run on `http://localhost:5000` by default.

## API Endpoints

### User Management

1. **Create a new user**

- **Endpoint:** `POST /api/users`
- **Request Body:**

````json
{
"user": {
    "userId": 2023566,
    "username": "adventure_seeker",
    "password": "adventure123",
    "fullName": {
        "firstName": "Ethan",
        "lastName": "Summit"
    },
    "age": 28,
    "email": "ethan.summit@example.com",
    "isActive": true,
    "hobbies": [
        "rock climbing",
        "skydiving"
    ],
    "address": {
        "street": "456 Mountain Trail",
        "city": "Adventureburg",
        "country": "Australia"
    }
}
}
  ```

2. **Retrieve a list of all users**

- **Endpoint:** `GET /api/users`


3. **Retrieve a specific user by ID**

- **Endpoint:** `GET /api/users/:userId`


4. **Update user information**

- **Endpoint:** `PUT /api/users/:userId`
- **Request Body:**
```json
{
    "user": {
    "userId": 202305,
    "username": "aleddx_jones34",
    "password": "unique_hashed_password",
    "fullName": {
        "firstName": "Nazmul",
        "lastName": "Jones"
    },
    "age": 1022,
    "email": "alex.jos@gmail.com",
    "isActive": true,
    "hobbies": [
        "surfing",
        "painting"
    ],
    "address": {
        "street": "123 Beachside Ave",
        "city": "Sunsetville",
        "country": "Australia"
    }
    }
}
```


5. **Delete a user**

- **Endpoint:** `DELETE /api/users/:userId`


### Order Management (Bonus)

1. **Add New Product in Order**

- **Endpoint:** `PUT /api/users/:userId/orders`
- **Request Body:**
 ```json
 {
  "orders": {
      "productName": "books",
      "price": 10,
      "quantity": 5
  }
  }
 ```


2. **Retrieve all orders for a specific user**

- **Endpoint:** `GET /api/users/:userId/orders`


3. **Calculate Total Price of Orders for a Specific User**

- **Endpoint:** `GET /api/users/:userId/orders/total-price`


## Validation and Error Handling

- Validation using Joi/Zod is implemented for user and order creation and updating operations.
- Validation errors are handled gracefully, providing meaningful error messages in the API responses.
- Error handling is implemented for scenarios like "User not found."

## Scripts

- `npm run start:dev`: Transpiles TypeScript code to JavaScript.
- `npm run start:prod`: To build the project in production
- `npm run lint`: Lints the code using ESLint.
- `npm run lint:fix`: Fixes linting issues automatically.
- `npm run prettier`: Formats code using Prettier.
- `npm run prettier:fix`: Fixes code formatting issues.

## Submission

- The GitHub repository can be found [Here](<https://github.com/Muhammad-Hamim/userManagementSystem>).
- Live deployment: [Your Live Deployment URL]

### Running Locally

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Update MongoDB connection string if necessary.
4. Run the application:
- Development mode: `npm run start:dev`.
- Production mode: `npm run start:prod`.

Visit the specified endpoints to interact with the API.

Feel free to reach out for any additional information or assistance.

