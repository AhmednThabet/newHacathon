import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PostsList from "./components/PostsList";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
      <div className="bg-red">
        <NavBar />
        <Routes>
          <Route path="/postList" element={<PostsList />} />
        </Routes>
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
