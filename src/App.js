import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/LandingPage/Landing.jsx";
import Login from "./Pages/Login_SignUp/Login.jsx";
import SignUp from "./Pages/Login_SignUp/SignUp.jsx";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
