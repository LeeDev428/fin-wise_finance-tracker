# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies
```powershell
# Run the setup script (Windows)
.\setup.ps1

# OR install manually:
cd backend
npm install
cd ../frontend
npm install
```

### Step 2: Configure MongoDB
1. Open `backend\.env`
2. Replace the MongoDB URI with your connection string from MongoDB Atlas:
   ```
   MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/finwise?retryWrites=true&w=majority
   ```

### Step 3: Add Logo (Optional)
- Place `finwise-logo.png` in `frontend\assets\`
- Or use a placeholder for now

### Step 4: Start Backend
```powershell
cd backend
npm start
```
Server runs at: http://localhost:5000

### Step 5: Start Frontend (New Terminal)
```powershell
cd frontend
npm start
```
Then press:
- `a` for Android emulator
- `i` for iOS simulator
- Scan QR code with Expo Go app

## 🎯 Test the App

1. **Register** a new account
2. **Login** with your credentials
3. Navigate through **Home**, **Modules**, and **Quizzes**

## 📞 Need Help?

See the full [README.md](README.md) for detailed documentation.

## ⚠️ Common Issues

**Backend won't start?**
- Check if MongoDB URI is configured correctly
- Ensure port 5000 is not in use

**Frontend won't start?**
- Make sure Expo CLI is installed: `npm install -g expo-cli`
- Clear cache: `expo start -c`

**Can't connect to API?**
- Update API_URL in `frontend/src/config/api.js`
- For Android emulator, use: `http://10.0.2.2:5000/api`
- For iOS simulator, use: `http://localhost:5000/api`
