import DataState from "./context/dataState.js";
import SignupPage from "./Pages/SignupPage/SignupPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.js";
import LoginPage from "./Pages/LoginPage/LoginPage.js";
import PrivateRoute from "./routes/PrivateRoute.js";

function App() {
  return (
    <DataState>
      <Router>
        <Routes>
          <Route path="/register" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/homepage"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </DataState>
  );
}

export default App;
