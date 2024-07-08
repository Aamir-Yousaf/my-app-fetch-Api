import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Albums from "./Albums/Albums";
import Posts from "./Posts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/posts" element={<Posts />} /> 
        <Route
          path="/about"
          element={
            <div>
              <p>This is the about page</p>
            </div>
          }
        />{" "}
        {/* Changed path to /about */}
      </Routes>
    </div>
  );
}

export default App;
