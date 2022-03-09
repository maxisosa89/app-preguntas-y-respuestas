import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.css"

export default function Navbar(){
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to='/' className="LinkTo">
                                        <span className="nav-link">Home</span> 
                                    </Link>
                                                        
                                </li>
                                <li className="nav-item">
                                    <Link to='/readme' className="LinkTo">
                                        <span className="nav-link">Readme</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contacto' className="LinkTo">
                                        <span className="nav-link">Contacto</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}