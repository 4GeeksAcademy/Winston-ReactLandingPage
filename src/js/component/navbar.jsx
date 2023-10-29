import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
    return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
               <a className="navbar-brand text-light" href="#">{props.start}</a>
                <button 
                    className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> 
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active text-light"  aria-current="page" href="#">{props.home}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" aria-current="page" href="#">{props.about}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" aria-current="page" href="#">{props.service}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" aria-current="page" href="#">{props.contact}</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

Navbar.propTypes = {
	start: PropTypes.string,
	home: PropTypes.string,
	about: PropTypes.string,
	service: PropTypes.string,
    contact: PropTypes.string
};

export default Navbar;