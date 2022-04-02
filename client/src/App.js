import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Medecament from "./pages/Medecament";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/Register" element={<Register />}>
            Register
          </Route>
          <Route path="/Login" element={<Login />}>
            Login
          </Route>
          <Route path="/Post" element={<Post />}>
            Monthly Post
          </Route>
          <Route path="/Profile" element={<Profile />}>
            Profile
          </Route>
          <Route path="/AboutUs" element={<AboutUs />}>
            About Us
          </Route>
          <Route path="/Careers" element={<Careers />}>
            Career
          </Route>
          <Route path="/Medecament" element={<Medecament />}>
            Drugs
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
