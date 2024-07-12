import TradingView from "../../components/tradingView.js";
import Header from "../../components/Header.js";
import Trades from "../../components/positions/Trades.js";
import BottomNavigationBar from "../../components/BottomNavigation.js";


const HomePage = () => {
  return (
    <>
      <Header />
      <TradingView />
      <Trades />
      <BottomNavigationBar />
    </>
  );
}

export default HomePage;
