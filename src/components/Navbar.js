import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {

  const [query, setQuery] = useState("");

  function handleClick(e) {
    e.preventDefault();
    props.updateSearch(query);
    setQuery("")
  }

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> Blockchain Hub </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/blockchain"
                  >
                    Blockchain
                  </Link>
                </li> */}

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">Cryptocurrency</Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/bitcoin">Bitcoin</Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/ethereum">Ethereum</Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/cryptocurrency">Cryptocurrency</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/defi">DeFi</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/science">
                  Science
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setQuery(e.target.value)} value={query} />
              <button className="btn btn-outline-success" type="submit" onClick={handleClick}>
                <Link style={{ color: "#198754", textDecoration: "none" }} to={`/${query}`}>Search</Link>
                {/* Search */}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
