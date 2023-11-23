import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signin() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        location: credentials.location,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid credentials");
    }
    if (json.success) {
      navigate("/login");
    }
  };

  const onChange = (event) => {
    setcredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <div className="mb-3"></div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={onChange}
            id="exampleFormControlInput1"
            placeholder="name"
            style={{ border: "2px solid #333", padding: "8px" }}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            style={{ border: "2px solid #333", padding: "8px" }}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={credentials.location}
            onChange={onChange}
            id="exampleFormControlInput1"
            placeholder="location"
            style={{ border: "2px solid #333", padding: "8px" }}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={onChange}
            id="exampleFormControlInput1"
            placeholder="password"
            style={{ border: "2px solid #333", padding: "8px" }}
          />
        </div>

        <button type="submit" className="btn btn-dark my-3">
          Submit
        </button>
        <Link to="/login" className="btn btn-dark">
          Already a user
        </Link>
      </div>
    </form>
  );
}
