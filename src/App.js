import "./App.css";
import Photos from "./Components/Photos";
import Users from "./Components/Users";
import Posts from "./Components/Posts";
import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const homeHanlder = () => {
    navigate("/");
  };
  return (
    <div className="App">
      {pathname !== "/" && <button onClick={homeHanlder}>Home</button>}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
