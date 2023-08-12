import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import classes from "./BottomNavigationBar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { Person, ViewList } from "@mui/icons-material";
import { useContext } from "react";
import DataContext from "../context/data";

const BottomNavigationBar = () => {
  const b = useContext(DataContext);
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
      {b.Responsive && (
        <Box className={classes.navigation}>
          <BottomNavigation
            sx={{ width: "100%", background: "black" }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);

              // Check if the "Chart" navigation item was clicked
              if (newValue === 2) {
                b.setShowChart(true); // Set chartClicked state to true
              } else b.setShowChart(false);
              if (newValue === 1) {
                b.setShowPositions(true); // Set chartClicked state to true
              } else b.setShowPositions(false);
            }}
          >
            <BottomNavigationAction
              sx={{ color: "white" }}
              label="Home"
              icon={<HomeIcon sx={{ color: "white" }} />}
            />

            <BottomNavigationAction
              sx={{ color: "white" }}
              label="Positions"
              icon={<ViewList sx={{ color: "white" }} />}
            />
            <BottomNavigationAction
              sx={{ color: "white" }}
              label="Chart"
              icon={<CandlestickChartIcon sx={{ color: "white" }} />}
            />
            <BottomNavigationAction
              sx={{ color: "white" }}
              label="Profile"
              icon={<Person sx={{ color: "white" }} />}
            />
          </BottomNavigation>
        </Box>
      )}
    </React.Fragment>
  );
};

export default BottomNavigationBar;
