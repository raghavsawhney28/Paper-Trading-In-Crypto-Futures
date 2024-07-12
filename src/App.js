import DataState from "./context/dataState.js";
import SignupPage from "./Pages/SignupPage/SignupPage.js";
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage.js"



function App() {
  return (
    <DataState>
      
      <Router>
        <Routes>
          
          <Route path="/register" element={<SignupPage/>} />
          <Route path="/homepage" element={<HomePage/>} />
          
          {/* Add more routes as needed */}
        </Routes>
      </Router>
      
    </DataState>
  );
}



export default App;