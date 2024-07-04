import Positions from "./Position";
import classes from "./Trades.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useContext } from "react";
import DataContext from "../../context/data.js";
import { useEffect } from "react";
import Positionr from "./rPosition.js";
import OpenOrder from "./OpenOrder.js";
import TradeHistory from "./TradeHistory.js";

const Trades = () => {
  const b = useContext(DataContext);
  const [value, setValue] = React.useState("1");
  const [dikha, setDikha] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (!b.showPositions && b.Responsive) {
      setDikha(false);
    } else if (!b.Responsive) {
      setDikha(true);
    } else if (b.Responsive && b.showPositions) {
      setDikha(true);
    }
  }, [b.showPositions, window.innerWidth, dikha]);

  return (
    <React.Fragment>
      {dikha && (
        <Box className={classes.body}>
          <TabContext value={value}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", color: "white" }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  sx={{ color: "white", fontSize: "11px" }}
                  label="Positions(2)"
                  value="1"
                />
                <Tab
                  sx={{ color: "white", fontSize: "11px" }}
                  label="Open Orders(2)"
                  value="2"
                />
                <Tab
                  sx={{ color: "white", fontSize: "11px" }}
                  label="Trade History"
                  value="3"
                />
              </TabList>
            </Box>

            {b.Responsive ? (
              <TabPanel sx={{ padding: "0", width: "60vw" }} value="1">
                <Positionr/>
              </TabPanel>
            ) : (
              <TabPanel sx={{ padding: "0", width: "60vw" }} value="1">
                <Positions />
              </TabPanel>
            )}

            {b.Responsive ? (
              <TabPanel sx={{ padding: "0", width: "60vw" }} value="2">
                abhi maintaince mai hai..... :)
              </TabPanel>
            ) : (
              <TabPanel sx={{ padding: "0", width: "60vw" }} value="2">
                <OpenOrder />
              </TabPanel>
            )}
            {b.Responsive ? (
              <TabPanel sx={{ padding: "0", width: "60vw" }} value="3">
                abhi maintaince mai hai..... :)
              </TabPanel>
            ) : (
              <TabPanel sx={{ padding: "0", width: "60vw" }} value="3">
                <TradeHistory />
              </TabPanel>
            )}
          </TabContext>
        </Box>
      )}
    </React.Fragment>
  );
};

export default Trades;
