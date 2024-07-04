import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
// import dotenv from "dotenv";
// import connectDB from "./backend/db/index.js";
// import express from "express";


// const app = express()

// dotenv.config({
//   path: "./.env",
// });

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 8080, () => {
//       console.log(`Server is running at port ${process.env.PORT || 8080}`);
//     });
//   })
//   .catch((err) => {
//     console.log("mongoDB connection failed !!", err);
//   });



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <App />
   </React.StrictMode> 
);

