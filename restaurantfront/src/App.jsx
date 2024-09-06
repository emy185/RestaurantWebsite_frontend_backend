import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Delivery from "./components/Delivery";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import About from "./components/About";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import BookingAccess from "./components/BookingAccess";
import EditProfile from "./components/EditProfile";
import EditMenu from "./components/EditMenu";
import Users from "./components/Users";
import Bookings from "./components/Bookings";
import CreateItem from "./components/CreateItem";

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
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Delivery />
              <Reviews />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Reviews />
            </>
          }
        />
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
              <>
                {" "}
                <Users /> <Bookings /> <Admin onLogout={handleLogout} />{" "}
              </>
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
