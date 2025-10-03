# 🎬 Movie Search App

A React + Redux Toolkit app to browse and search movies from the IMDb API, with user authentication and personalized search history. Each user sees only their own last searches.

---

## 🚀 Features

###🔑 User Authentication

-Register and login.

-Users and session stored in localStorage.

-Tracks current logged-in user.

---


🎥 Movie Browsing

--Fetch movies from IMDb API

--Responsive grid layout for movie cards.

--Displays title, year, rating, poster, and plot snippet.

---
# 📈 Stocks Portfolio Backend API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)
![YahooFinance](https://img.shields.io/badge/API-YahooFinance-blue?logo=yahoo)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

A backend API built with **Node.js + Express** that fetches stock data from **Yahoo Finance** and enriches it with portfolio insights.

---

## 🚀 What It Calculates

For each stock in your portfolio:
- 💰 **Investment Value**
- 💹 **Current Market Price (CMP)**
- 📊 **Present Value**
- 📈 **Gain/Loss** (absolute and %)
- 📉 **P/E Ratio**
- 🧮 **EPS (Earnings per Share)**
- 🏦 **Latest Net Income** (annual or quarterly)

---

## 📊 Portfolio Summary

In addition, the API returns overall portfolio metrics:
- 💵 **Total Investment**
- 📈 **Total Present Value**
- 📊 **Total Gain/Loss**
- 📉 **Overall Return %**
- 🔢 **Number of Stocks**


🛠️ Tech Stack

Node.js

Express.js

Yahoo Finance API (yahoo-finance2)

CORS

📂 Project Structure
.
├── server.js        # Main server file
├── portfolio.js     # Portfolio data (local JSON/JS array)
├── package.json     # Dependencies & scripts
└── README.md        # Project documentation

# 📈 Stocks Portfolio Backend API

A simple backend API built with **Node.js + Express** that fetches stock data from **Yahoo Finance** and calculates portfolio performance.

---

## ⚙️ Installation & Setup

### Clone the repo
```bash
git clone https://github.com/soumya1925/stocksbackend.git
cd stocksbackend
Install dependencies
bash
Copy code
npm install
Run locally
bash
Copy code
npm run dev   # with nodemon (auto-reload)
npm start     # normal start
API will be available at
arduino
Copy code
http://localhost:5000
📡 API Endpoint
GET /
Response Example
json
Copy code
{
  "portfolio": [
    {
      "symbol": "AAPL",
      "exchange": "NASDAQ",
      "sector": "Technology",
      "purchasePrice": 150,
      "quantity": 10,
      "investment": 1500,
      "cmp": 170,
      "presentValue": 1700,
      "gainLoss": 200,
      "gainLossPercent": "13.33%",
      "peRatio": 28.45,
      "eps": 6.12,
      "latestNetIncome": "99.80B",
      "portfolioPercent": "25.00"
    }
  ],
  "totals": {
    "totalInvestment": 1500,
    "totalPresentValue": 1700,
    "totalGainLoss": 200,
    "overallReturnPercent": "13.33%",
    "numberOfStocks": 1
  }
}
```

🌐 Deployment
Page is live ar Deployment link: https://frontendstocksmarket-jg0sl4iti-soumya-rouls-projects.vercel.app 
You can deploy this API on:
Render

Railway

Vercel

Ensure your server.js listens on:

js
Copy code
const PORT = process.env.PORT || 5000;
📜 Scripts
From package.json:

json
Copy code
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
🙌 Author
👤 Soumya

GitHub: @soumya1925




















A React + Redux Toolkit app to browse and search movies from IMDb API, with user authentication and personalized search history. Each user sees only their own last searches.

---
##🚀 Features

🔑 User Authentication

--Register and login.

--Users and session stored in localStorage.

--Tracks current logged-in user.

🎥 Movie Browsing

--Fetch movies from IMDb API

--Responsive grid layout for movie cards.

--Displays title, year, rating, poster, and plot snippet.

---

🔍 Search

Search movies by title.

Clickable chips for last searches.

Automatically clears search when input is empty.

Last searches are user-specific.

📈 Display Control

Default 10 movies displayed.

"Load More" increases display count by 15.

📱 Responsive Design

Desktop: Top row shows Top Movies, user icon, and logout button.

Mobile: Headers and search bar stacked vertically.

📝 User-Specific Last Searches

Last searches are saved per user.

Maximum of 5 recent searches.

Switching users updates displayed search history.

🚪 Logout

Clears session and redirects to login page.

🛠️ Tech Stack

Frontend: React, Material UI

State Management: Redux Toolkit (moviesSlice, authSlice)

Routing: React Router

API: IMDb unofficial API

Persistence: localStorage

📂 Project Structure
src/
├─ components/
│  └─ SearchBar.tsx      # Search bar with last searches & auto-clear
├─ pages/
│  ├─ LandingPage.tsx    # Main page with movies & search
│  ├─ RegisterPage.tsx   # User registration page
│  └─ LoginPage.tsx      # Login page
├─ store/
│  ├─ authSlice.ts       # User authentication & session state
│  ├─ moviesSlice.ts     # Movies, search term, last searches, display count
│  └─ store.ts           # Redux store setup
└─ App.tsx               # Main router setup

⚡ Usage

Clone the repo:

git clone <repo-url>
cd <repo-folder>


Install dependencies:

npm install
# or
yarn install


Start the app:

npm start
# or
yarn start


Open http://localhost:3000

🌟 Future Improvements

Movie detail page with full info & reviews.

API pagination for large datasets.

Profile page for managing last searches & favorites.

Netflix-style UI with advanced styling.
