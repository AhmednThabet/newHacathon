import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostsList from "./components/PostsList";
function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path="/postList" element={<PostsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
