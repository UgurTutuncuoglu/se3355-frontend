# SE3355 Frontend - News Portal

This is the **frontend** project for the SE3355 assignment, developed using **React** and **Redux**.  
It is connected to a backend API that provides news data and other services.

## 🌐 Live Website
The site is deployed using **GitHub Pages** and can be accessed at:  
https://ugurtutuncuoglu.github.io/se3355-frontend/

## 📁 Project Structure

Frontend/
│
├── public/ # Public assets
|── redux/ # Redux for saving visited pages
├── src/ # Main source code
│ ├── components/ # Reusable React components (Navbar, Slider, Weather, etc.)
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry point
├── .gitignore
├── package.json
├── vite.config.js # Vite build configuration
└── index.html

## 🏗️ Build for Production
npm run build

## 🔗 Backend
https://github.com/UgurTutuncuoglu/se3355-backend

## 📦 Deployment (GitHub Pages)
To deploy on GitHub Pages:

Run npm run build

Push the built files to the gh-pages branch

GitHub Pages will serve from that branch

## Uğur Tütüncüoğlu - 20070006012

## 🔧 Tech Stack

- Node.js
- Express.js
- SQLite 
- Deployed on Render.com
- React with VITE


⚠️ Notes on Free Hosting (Render.com)
This backend is hosted on Render.com using the free tier, which has the following important behaviors:

🔄 Auto-Sleep & Cold Start
Render automatically puts free services to sleep after 15 minutes of inactivity to save resources.

When the service is accessed again ( via the frontend or direct API call), it may take a few seconds or minutes to "wake up."

During this wake-up period, you might see a temporary 502 Bad Gateway error — this is expected and will usually resolve itself shortly.
