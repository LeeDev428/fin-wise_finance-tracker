# FinWise - Financial Literacy Mobile App

A cross-platform mobile application built with the MERN stack to help users learn about financial management through interactive learning modules and gamified quizzes.

## 🚀 Features

- **User Authentication**: Secure registration and login with JWT
- **Dashboard**: Track learning progress with visual indicators
- **Learning Modules**: Interactive financial literacy content categorized by:
  - Knowledge
  - Attitude
  - Behavior
- **Gamified Quizzes**: Test knowledge through engaging quizzes
- **Progress Tracking**: Monitor completion status and achievements
- **Responsive UI**: Clean, intuitive interface matching the design specifications

## 🛠️ Tech Stack

### Backend
- **Node.js** + **Express.js**: RESTful API server
- **MongoDB**: Database (via MongoDB Atlas)
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication
- **bcryptjs**: Password hashing

### Frontend
- **React Native**: Cross-platform mobile app (iOS & Android)
- **Expo**: Development and build tools
- **React Navigation**: Navigation library
- **Axios**: HTTP client
- **AsyncStorage**: Local data persistence

## 📁 Project Structure

```
fin-wise_finance-tracker/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Module.js
│   │   ├── Quiz.js
│   │   └── Progress.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── modules.js
│   │   ├── quizzes.js
│   │   └── progress.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── config/
│   │   │   └── api.js
│   │   ├── constants/
│   │   │   └── colors.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── navigation/
│   │   │   ├── AppNavigator.js
│   │   │   └── MainNavigator.js
│   │   ├── screens/
│   │   │   ├── RegisterScreen.js
│   │   │   ├── LoginScreen.js
│   │   │   ├── HomeScreen.js
│   │   │   ├── ModulesScreen.js
│   │   │   └── QuizzesScreen.js
│   │   └── services/
│   │       └── api.js
│   ├── assets/
│   │   └── finwise-logo.png
│   ├── App.js
│   ├── index.js
│   ├── app.json
│   ├── babel.config.js
│   └── package.json
│
└── package.json
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Expo CLI (`npm install -g expo-cli`)
- MongoDB Compass (optional, for database management)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Open `backend/.env`
   - Update `MONGODB_URI` with your MongoDB Atlas connection string
   - Update `JWT_SECRET` with a secure random string

4. Start the backend server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Add your logo:
   - Place `finwise-logo.png` in `frontend/assets/` directory
   - Recommended size: 512x512 pixels

4. Update API URL (if needed):
   - Open `frontend/src/config/api.js`
   - Update `API_URL` if your backend is on a different host/port

5. Start the app:
```bash
npm start
# or
expo start
```

6. Run on device/emulator:
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app

## 🗄️ MongoDB Setup

### Using MongoDB Compass

1. Open MongoDB Compass
2. Connect to your MongoDB Atlas cluster
3. Create database: `finwise`
4. Collections will be created automatically when you register your first user

### Sample Data (Optional)

You can seed the database with sample modules and quizzes by making POST requests to:
- `POST http://localhost:5000/api/modules`
- `POST http://localhost:5000/api/quizzes`

Example Module:
```json
{
  "moduleNumber": 1,
  "title": "Module #1",
  "category": "Knowledge",
  "icon": "✏️",
  "content": "Learn the basics of financial literacy...",
  "isActive": true
}
```

Example Quiz:
```json
{
  "quizNumber": 1,
  "title": "Quiz #1",
  "category": "Knowledge",
  "icon": "✏️",
  "questions": [
    {
      "question": "What is a budget?",
      "options": ["A spending plan", "A type of loan", "An investment", "A credit card"],
      "correctAnswer": 0,
      "points": 10
    }
  ],
  "isActive": true
}
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Modules
- `GET /api/modules` - Get all modules (protected)
- `GET /api/modules/:id` - Get single module (protected)
- `GET /api/modules?category=Knowledge` - Filter by category

### Quizzes
- `GET /api/quizzes` - Get all quizzes (protected)
- `GET /api/quizzes/:id` - Get single quiz (protected)
- `GET /api/quizzes?category=Attitude` - Filter by category

### Progress
- `GET /api/progress` - Get user progress (protected)
- `POST /api/progress/module/:moduleId` - Update module progress (protected)
- `POST /api/progress/quiz/:quizId` - Update quiz progress (protected)

## 🎨 UI Design

The app follows the provided design specifications with:
- **Primary Color**: Light cream/yellow (#E8E5B5)
- **Accent Color**: Gold (#FFD700)
- **Progress Colors**: Green, Yellow, Orange, Red
- **Clean Cards**: White backgrounds with subtle shadows
- **Icons**: Emoji-based for visual appeal

## 📱 Screens

1. **Register Screen**: Create new account
2. **Login Screen**: Sign in to existing account
3. **Home Screen**: Dashboard with progress and feature cards
4. **Learning Modules**: Browse and complete educational modules
5. **Gamified Quizzes**: Take quizzes to test knowledge

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- Protected API routes
- Secure storage of tokens in AsyncStorage
- Input validation on both client and server

## 🚧 Development Notes

- The frontend uses Expo for easier development and testing
- Backend runs on port 5000 by default
- Make sure both backend and frontend are running simultaneously
- Update the API URL in `frontend/src/config/api.js` if deploying

## 📝 TODO / Future Enhancements

- [ ] Add module detail view with full content
- [ ] Implement quiz taking functionality
- [ ] Add rewards/badges system
- [ ] Implement notifications
- [ ] Add user profile editing
- [ ] Social sharing features
- [ ] Dark mode support
- [ ] Offline mode support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ using the MERN Stack**
