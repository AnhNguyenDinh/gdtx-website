# NodeJS App

Production-ready REST API with Express, MongoDB, JWT auth.

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server với nodemon |
| `npm start` | Production server |
| `npm test` | Chạy tests |
| `npm run lint` | Kiểm tra linting |
| `npm run format` | Format code với Prettier |

## API Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/v1/health` | No | Health check |
| POST | `/api/v1/auth/register` | No | Đăng ký |
| POST | `/api/v1/auth/login` | No | Đăng nhập |
| GET | `/api/v1/auth/me` | Bearer Token | Thông tin user |

## Project Structure

```
src/
├── config/       # Cấu hình app, DB, logger
├── controllers/  # Request handlers
├── middlewares/  # Auth, validation, error handling
├── models/       # Mongoose models
├── routes/       # Express routes
├── services/     # Business logic
├── tests/        # Test files
└── app.js        # Entry point
```
