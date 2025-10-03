# 🎬 Movie Search App

A React + Redux Toolkit app to browse and search movies from the IMDb API, with user authentication and personalized search history. Each user sees only their own last searches.

---

## 🚀 Features

🔑 User Authentication 

- Register and login.
- Users and session stored in localStorage.
- Tracks current logged-in user.

---

🎥 Movie Browsing

- Fetch movies from IMDb API
- Responsive grid layout for movie cards.
- Displays title, year, rating, poster, and plot snippet.

---

🔍 Search

- Search movies by title.
- Clickable chips for last searches.
- Automatically clears search when input is empty.
- Last searches are user-specific.

---

📈 Display Control
- Default 10 movies displayed.
- "Load More" increases display count by 15.

---

📱 Responsive Design
- Desktop: Top row shows Top Movies, user icon, and logout button.
- Mobile: Headers and search bar stacked vertically.

---

📝 User-Specific Last Searches
- Last searches are saved per user.
- Maximum of 5 recent searches.
- Switching users updates displayed search history.

---

🛠️ Tech Stack
- Frontend: React, Material UI
- State Management: Redux Toolkit (moviesSlice, authSlice)
- Routing: React Router



Data Persistence: localStorage


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
  
##🛠️ Tech Stack
- Frontend: React, Material UI
- State Management: Redux Toolkit 
- Routing: React Router
- ![API: IMDb unofficial API](https://imdbapi.dev/)
- Persistence: localStorage



##📂 Project Structure
.
src/
├─ components/
│  ├─ SearchBar.tsx      # Search bar with last searches & auto-clear
│  ├─ LandingPage.tsx    # Main page with movies & search on successful Login
│  ├─ RegisterPage.tsx   # User registration page
│  ├─ MovieCard.tsx      # Card Data on clicking a card on Landing Page
│  └─ LoginPage.tsx      # Login page
├─ store/
│  ├─ authSlice.ts       # User authentication & session state
│  ├─ moviesSlice.ts     # Movies, search term, last searches, display count
│  ├─ movieCardSlice.ts  # Specific movie card details like artists , writers ,stars
│  └─ index.tsx          # Redux store setup
└─ App.tsx               # Main router setup








