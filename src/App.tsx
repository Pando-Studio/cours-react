import React, { useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  UNSAFE_RouteContext,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { UserContext } from "./contexts/UserContext";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null);

  // prevent value of changing
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ul className="menu">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </header>

        <UserContext.Provider value={value}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
