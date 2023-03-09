import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PostsList from "./components/PostsList";
function App() {
  return (
    <Router>
      <div className="bg-red">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/postList" element={<PostsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
