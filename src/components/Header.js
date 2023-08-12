import classes from "./Header.module.css";
import Icon from "./Icon";
import { useContext } from "react";
import DataContext from "../context/data";
import Burger from "./Burger";
import { GiHamburgerMenu } from "react-icons/gi";
import CurrentCoin from "./CurrentCoin";

const Header = () => {
  const a = useContext(DataContext);
  const myList = a.myList;

  return (
    <header className={classes.header}>
      {a.showBur && <Burger />}
      {/* <GiHamburgerMenu
        onClick={() => a.setBur(!a.showBur)}
        className={classes.burg}
      /> */}
      <CurrentCoin />
      <Icon
        symbol={myList.k1}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png"
      />
      <Icon
        symbol={myList.k2}
        image="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-Pic.png"
      />
      <Icon
        symbol={myList.k3}
        image="https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png"
      />
      <Icon
        symbol={myList.k4}
        image="https://cryptologos.cc/logos/solana-sol-logo.png"
      />
      <Icon
        symbol={myList.k5}
        image="https://cryptologos.cc/logos/polygon-matic-logo.png"
      />
      <Icon
        symbol={myList.k6}
        image="https://cdn-icons-png.flaticon.com/512/825/825445.png"
      />
      <Icon
        symbol={myList.k7}
        image="https://cdn-icons-png.flaticon.com/512/4821/4821657.png"
      />
    </header>
  );
};

export default Header;
