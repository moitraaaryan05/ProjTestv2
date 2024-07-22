import React from 'react';
import './App.css'; // Ensure this path is correct based on your project structure
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.png'; // Ensure this path is correct based on your project structure
import NewPage from './NewPage';

const App: React.FC = () => {
    return (
      <div>
        <nav className="navbar">
            <div className="navbar-top">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="login-button">
                    <button>Login / Register</button>
                </div>
            </div>
            <div className="navbar-bottom">
                <div className="links">
                    <a href="#">Home</a>
                    <Link to="/suggestions">Suggestions</Link>
                    <a href="#">Compare</a>
                    <a href="#">History</a>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="navbar-path">
                <span style={{ color: '#0b5cff' }}>Home</span>
                <span style={{ fontSize: 'larger' }}>›</span>
                <span style={{ color: '#0b5cff' }}>Suggestions</span>
                <span style={{ fontSize: 'larger' }}>›</span>
                <span>Inputs</span>
            </div>
        </nav>

        <Routes>
          <Route path="/suggestions" element={<NewPage />} />
        </Routes>
      </div>
    );
};

export default App;
