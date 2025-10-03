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
