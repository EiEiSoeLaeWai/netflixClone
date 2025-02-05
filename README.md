# **Netflix Clone - React.js, Firebase & TMDB API**  

## **Overview**  
This project is a **Netflix-inspired streaming platform** built with **React.js**, leveraging **Firestore** for database management and **TMDB API** for fetching movie data. The platform features **user authentication, dynamic content fetching, and a responsive UI** to deliver an engaging viewing experience.  

## **Features**  
✅ **User Authentication** – Secure login and signup using Firebase Authentication.  
✅ **Dynamic Movie Listings** – Fetches real-time movie details using the TMDB API.  
✅ **Firestore Integration** – Stores user preferences and streaming data.  
✅ **Responsive UI** – Optimized for both desktop and mobile viewing.  
✅ **Smooth UI/UX** – Netflix-style layout with intuitive navigation.  

## **Tech Stack**  
- **Frontend:** React.js, Tailwind CSS  
- **Database:** Firebase Firestore  
- **Authentication:** Firebase Authentication  
- **API:** TMDB API  

## **Installation & Setup**  
1. **Clone the repository:**  
   ```bash
   git clone https://github.com/EiEiSoeLaeWai/netflix-clone.git
   cd netflix-clone
   ```  
2. **Install dependencies:**  
   ```bash
   npm install
   ```  
3. **Set up Firebase & TMDB API:**  
   - Create a Firebase project and enable Firestore & Authentication.  
   - Get an API key from [TMDB](https://www.themoviedb.org/) and store it in a `.env` file:  
     ```env
     REACT_APP_TMDB_API_KEY=your_tmdb_api_key
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     ```  
4. **Run the project:**  
   ```bash
   npm start
   ```  
5. **Access the app:**  
   - Open http://localhost:5173/ in your browser.  

## **Future Enhancements**  
🔹 Add a watchlist feature  
🔹 Implement video streaming with a third-party service  
🔹 Improve UI animations and transitions  

