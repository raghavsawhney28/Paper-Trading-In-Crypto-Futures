import DataState from "./context/dataState";
import Header from "./components/Header";
import TradingView from "./components/tradingView";
import Trades from "./components/positions/Trades";
import BottomNavigationBar from "./components/BottomNavigation";

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
