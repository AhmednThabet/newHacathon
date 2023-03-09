import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PostsList from './Components/PostsList'


function App() {
  return (
    <Router>
      <div className="bg-red">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/postList" element={<PostsList />} />
        </Routes>
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// function App() {
//   return (
//     // <div className="App">
//     //   <SignUp/>
//     // </div>