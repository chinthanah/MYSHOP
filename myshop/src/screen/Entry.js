import React from "react";
import { Link } from "react-router-dom";

export default function Entry() {
  return (
    <div>
      <div
        className="navbar bg-cyan text-light"
        style={{
          fontFamily: "Roboto",
          fontSize: "20px",
          fontWeight: "bold" /* other styles */,
        }}
      >
        MY SHOP
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "15vh",
          transform: "translateY(-50%)",
        }}
      >
        <Link to="/createuser" className="btn btn-dark">
          Signin
        </Link>
        <Link to="/login" className="btn btn-dark mx-2">
          Login
        </Link>
      </div>
    </div>
  );
}
