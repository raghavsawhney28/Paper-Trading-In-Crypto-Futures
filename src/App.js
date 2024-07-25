import DataState from "./context/dataState.js";
import SignupPage from "./Pages/SignupPage/SignupPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.js";
import LoginPage from "./Pages/LoginPage/LoginPage.js";
import PrivateRoutes from "./routes/PrivateRoute.js";




function App() {

  
 
  return (
    <DataState>
      
      <Router>
        
        <Routes>
          <Route element={<PrivateRoutes/>}>
              <Route path="/homepage" element={<HomePage/>}/>
          </Route>
          <Route path="/register" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          
        </Routes>
      </Router>
    </DataState>
  );
}

export default App;
