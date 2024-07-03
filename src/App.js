import DataState from "./context/dataState";
import Header from "./components/Header";
import TradingView from "./components/tradingView";
import Trades from "./components/positions/Trades";
import BottomNavigationBar from "./components/BottomNavigation";
import express from 'express';
import cookieParser from "cookie-parser";
import cors from 'cors';

function App() {
  return (
    <DataState>
      <Header />
      <TradingView />
      <Trades />
      <BottomNavigationBar />
    </DataState>
  );
}


app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export default App;
