import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Book from "../pages/Book";

function BookingAccess({ isSuperUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuperUser) {
      alert("You are an admin and cannot access this page.");
      navigate("/admin");
    }
  }, [isSuperUser, navigate]);

  if (isSuperUser) {
    return null;
  }

  return <Book />;
}

export default BookingAccess;
