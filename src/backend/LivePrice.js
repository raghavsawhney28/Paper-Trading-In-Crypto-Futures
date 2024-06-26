// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import classes from "./LivePrice.module.css";

// const LivePrice = (props) => {
//   const [price, setPrice] = useState(null);
//   const [error, setError] = useState(null);
//   const cryptoSymbol = "bitcoin";
//   const currency = "usd";

//   const Price = props.Price;

//   useEffect(() => {
//     const getLiveCryptoPrice = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoSymbol}&vs_currencies=${currency}`
//         );
//         const price =
//           response.data[cryptoSymbol.toLowerCase()][currency.toLowerCase()];
//         setPrice(price);
//       } catch (error) {
//         setError(`Failed to fetch live crypto price: ${error.message}`);
//       }
//     };

//     // Fetch the price initially
//     getLiveCryptoPrice();

//     // Fetch the price every 10 seconds (or any other desired interval)
//     const interval = setInterval(getLiveCryptoPrice, 10000); // 10 seconds

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, [currency, cryptoSymbol]);

//   return (
//     <td className={classes.td}>{Price}</td>
//     // <div>
//     //   {price ? (
//     //     // <p>
//     //     //   {price}

//     //     // </p>
//     //   ) : (
//     //     <p>Loading...</p>
//     //   )}
//     //   {error && <p>Error: {error}</p>}
//     // </div>
//   );
// };

// export default LivePrice;
