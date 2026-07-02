# IT Asset Management System

A comprehensive web application for managing IT assets, including tracking asset inventory, user assignments, and maintenance logs.

## Project Structure

```
it-asset-management/
├── backend/              # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/itassets/
│   │   │   │   ├── model/       # Entity, DTO, and data models
│   │   │   │   ├── repository/  # Data access layer
│   │   │   │   ├── service/     # Business logic layer
│   │   │   │   ├── controller/  # REST API endpoints
│   │   │   │   └── exception/   # Exception handling
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
├── frontend/             # React frontend
│   ├── src/
│   │   ├── pages/       # Page components
│   │   ├── components/  # Reusable components
│   │   ├── api/         # API service layer
│   │   ├── context/     # React context providers
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   └── .env.example
└── README.md
```

## Features

- **Asset Management**: Track and manage IT assets
- **User Management**: Manage system users and their roles
- **Asset Assignment**: Assign assets to users
- **Maintenance Tracking**: Log and track maintenance activities
- **Audit Logging**: Monitor all system activities
- **RESTful API**: Full-featured backend API
- **Responsive UI**: Modern React-based frontend

## Technology Stack

### Backend
- Java 17
- Spring Boot 3.1.3
- Spring Data JPA
- MySQL 8.0
- Maven

### Frontend
- React 18.2
- React Router 6.14
- Axios 1.4
- Vite

## Getting Started

### Prerequisites
- Java 17+
- Node.js 16+
- MySQL 8.0+
- Maven 3.6+

### Backend Setup

1. Create database:
```sql
CREATE DATABASE itassets_db;
```

2. Update `backend/src/main/resources/application.properties` with your database credentials

3. Build and run:
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

## API Endpoints

### Assets
- `GET /api/assets` - Get all assets
- `GET /api/assets/{id}` - Get asset by ID
- `POST /api/assets` - Create new asset
- `PUT /api/assets/{id}` - Update asset
- `DELETE /api/assets/{id}` - Delete asset

### Users
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

### Assignments
- `GET /api/assignments` - Get all assignments
- `GET /api/assignments/{id}` - Get assignment by ID
- `POST /api/assignments` - Create new assignment
- `PUT /api/assignments/{id}` - Update assignment
- `DELETE /api/assignments/{id}` - Delete assignment

### Maintenance
- `GET /api/maintenance` - Get all maintenance logs
- `GET /api/maintenance/{id}` - Get maintenance log by ID
- `POST /api/maintenance` - Create new maintenance log
- `PUT /api/maintenance/{id}` - Update maintenance log
- `DELETE /api/maintenance/{id}` - Delete maintenance log

## Development

### TODO Items
- [ ] Implement service layer classes
- [ ] Implement REST controller endpoints
- [ ] Add authentication/authorization
- [ ] Add input validation
- [ ] Connect frontend API services
- [ ] Add error handling and logging
- [ ] Write unit tests
- [ ] Add database migrations
- [ ] Deploy to production

## License

MIT License - See LICENSE file for details