import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from "./pages/home";
import Learn1 from "./pages/learn1";

const AppRouter = () => {
    return (
        <Router basename={process.env.REACT_APP_BASENAME || "/"}>
            <nav className="navcontainer">
                <div className="nav-container">
                    <Link to="/" className="nav-logo">My App</Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/learn" className="nav-links">
                                Learn
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn1 />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;