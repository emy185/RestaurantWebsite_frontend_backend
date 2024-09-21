import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin/Admin";
import BookingAccess from "./components/BookingAccess";
import EditProfile from "./components/EditProfile";
import EditMenu from "./components/EditMenu";
import CreateItem from "./components/CreateItem";
import Home from "./pages/Home/Home";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isSuperUser, setIsSuperUser] = useState(
    localStorage.getItem("isSuperUser") === "true"
  );

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setIsSuperUser(localStorage.getItem("isSuperUser") === "true");

    const handleWindowClose = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("isSuperUser");
    };

    window.addEventListener("beforeunload", handleWindowClose);
    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
  }, []);

  const handleLogin = (newToken, isSuperUser) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("isSuperUser", isSuperUser);
    setToken(newToken);
    setIsSuperUser(isSuperUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isSuperUser");
    setToken(null);
    setIsSuperUser(false);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/login"
          element={
            token ? (
              isSuperUser ? (
                <Navigate to="/admin" replace />
              ) : (
                <Navigate to="/profile" replace />
              )
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/profile"
          element={
            token ? (
              <Profile onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/booking"
          element={
            token ? (
              <BookingAccess isSuperUser={isSuperUser} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/profile" replace /> : <Register />}
        />
        <Route
          path="/admin"
          element={
            token ? (
              <Admin onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/edit_profile" element={<EditProfile />} />
        <Route path="/edit_menu/:id" element={<EditMenu />} />
        <Route path="/create_item" element={<CreateItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
