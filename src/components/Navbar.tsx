'use client';

import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/navbar.css';
import Link from "next/link";


const Navbar = () => {
  return (
    <section className="menu">

        <nav className="navbar navbar-expand-lg fixed-top">
            
            <div className="container">
                <Link className="navbar-brand title" href="#">
                    Japon Haru 2025
                </Link>

                {/* Bouton hamburger pour toggler le menu */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                 <div className="navbar" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">A propos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Utilisateur</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    </section>
  );
};

export default Navbar;
