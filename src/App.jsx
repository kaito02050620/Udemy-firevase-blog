import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import CreatePost from "./components/post/CreatePost";
import Login from "./components/auth/login/Login";
import Logout from "./components/auth/logout/Logout";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/createpost"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
        {isAuth ? (
          <Route
            path="/logout"
            element={<Logout setIsAuth={setIsAuth} />}
          ></Route>
        ) : (
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} />}
          ></Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
