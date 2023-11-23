import React from "react";
import { Link } from "react-router-dom";

export default function Food() {
  return (
    <div>
      <nav className="navbar bg-cyan">
        <div className="navbar-center">
          <Link
            className="navbar-brand text-light"
            to="/"
            style={{
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            MYSHOP FOOD ZONE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button type="button" className="btn btn-dark">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-4">
        <div
          className="text-center"
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          WELCOME TO MYSHOP FOOD ZONE ORDER YOUR FOOD AND GET INSTANT DELIVERY
        </div>
      </div>
      <div>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3" style={{ width: "16rem" }}>
              <img
                src="https://source.unsplash.com/random/900×700/?veg-burger"
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "120px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <div className="d-flex">
                  <select
                    className="form-select form-select-sm me-2"
                    aria-label="Small select example"
                  >
                    <option defaultValue>Qty</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                  <select
                    className="form-select form-select-sm"
                    aria-label="Small select example"
                  >
                    <option defaultValue>Size</option>
                    <option value="1">small</option>
                    <option value="2">medium</option>
                    <option value="3">large</option>
                  </select>
                </div>
                <div className="my-3">
                  <Link to="/" className="btn btn-dark">
                    Order now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
