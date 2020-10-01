import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login.js";
import "./App.css";

function App() {
  const [token, setY] = useState(null);
  return (
    <div className="app">
      {!token && <Login />}
      {/*token && <Player spotify={s} />*/}
    </div>
  );
}

export default App;
