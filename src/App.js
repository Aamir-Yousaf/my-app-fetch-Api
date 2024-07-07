
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Albums from './Albums/Albums';
function App() {
  return (
      <div className="App">
         <NavBar/>
         <Routes>
           <Route path="/" element={<Albums/>} />
           <Route path="/Posts" element={<div><p>This is about page</p></div>} />
           <Route path="/Albums" element={<div><p>This is about page</p></div>} />
         </Routes>
      </div>
  
  );
}

export default App;
