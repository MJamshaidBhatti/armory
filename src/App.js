import React, { useEffect, useState } from "react";
import LandingPage from "./pages/landing/Page"; //marketing landing page
import Welcome from "./pages/Welcome.jsx"; //welcome screen

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {process.env.REACT_APP_Welcome === "true" ? (
            <Welcome />
        ) : (
            <LandingPage />
        )}
      </header>
    </div>
  );
}

export default App;
