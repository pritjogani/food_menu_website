
import Resturant from "./component/basics/Resturant"
import Ordernowpage from "./component/basics/Ordernowpage"
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root to Home */}
        <Route path="/" element={<Navigate to="/home" />} />
        
        {/* Home Page */}
        <Route path="/home" element={  <Resturant />} />
        
        {/* Order Now Page */}
        <Route path="/ordernow" element={<Ordernowpage />} />
        
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;






  



 