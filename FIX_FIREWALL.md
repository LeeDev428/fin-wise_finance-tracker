# FIX: Expo Not Loading on iPhone

## The Problem:
Your Windows Firewall is blocking the connection between your laptop and iPhone!

## QUICK FIX - Allow Node.js through Firewall:

### Option 1: Run this PowerShell command (Run as Administrator):
```powershell
New-NetFirewallRule -DisplayName "Node.js for Expo" -Direction Inbound -Program "C:\Program Files\nodejs\node.exe" -Action Allow
```

### Option 2: Manual Firewall Configuration:

1. Press **Windows Key** + Type "**Firewall**"
2. Click "**Windows Defender Firewall**"
3. Click "**Allow an app through firewall**" (left side)
4. Click "**Change settings**" (top)
5. Click "**Allow another app...**" (bottom)
6. Click "**Browse...**"
7. Navigate to: `C:\Program Files\nodejs\node.exe`
8. Select it and click "**Add**"
9. Make sure BOTH **Private** and **Public** are checked
10. Click **OK**

---

## BETTER SOLUTION: Use Tunnel Mode (Bypasses Firewall!)

Stop the current Expo (Press Ctrl+C) and run:

```powershell
npx expo start --tunnel
```

This creates a public URL that works through ANY network and bypasses your firewall!

---

## Even FASTER: Test in Web Browser NOW!

While Expo is running, just press **`w`** in the terminal and test the app in your browser first!

This proves the app works before dealing with phone/firewall issues.

---

## Why It's Slow:
- Windows Firewall is blocking port 8081
- Metro bundler can't send files to your phone
- Your phone keeps trying to connect but gets blocked

## The Fix Will:
✅ Allow Node.js to communicate through your network
✅ Let your iPhone connect to Metro bundler on port 8081
✅ Make loading instant (under 5 seconds)
