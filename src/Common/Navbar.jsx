import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <h5 className="navbar-brand" href="#">BlogApp</h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to='/' >
        <li className="nav-item">
          <span className="nav-link active" aria-current="page" href="#">Home</span>
        </li>
        </Link>
       <Link to='/create' >
       <li className="nav-item">
          <span className="nav-link" href="#">Create</span>
        </li>
       </Link>
       <Link to='/update' >
       <li className="nav-item">
          <span className="nav-link" href="#">Edit Blog</span>
        </li>
       </Link>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  );
}


