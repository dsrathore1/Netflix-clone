import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from "./Pages/FAQ/FAQ.jsx";
import Login from "./Pages/Login_SignUp/Login.jsx";
import SignUp from "./Pages/Login_SignUp/SignUpPages/SignUp1.jsx";
import Landing from "./Pages/LandingPage/Landing.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<FAQ />} /> */}
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
