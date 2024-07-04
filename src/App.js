import DataState from "./context/dataState.js";
import Header from "./components/Header.js";
import TradingView from "./components/tradingView.js";
import Trades from "./components/positions/Trades.js";
import BottomNavigationBar from "./components/BottomNavigation.js";



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



export default App;