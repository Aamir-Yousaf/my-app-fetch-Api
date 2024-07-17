import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Albums from "./Albums/Albums";
import Posts from "./Posts";
import AlbumsDetails  from "./AlbumsDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/AlbumsDetails:id" element={<AlbumsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
