import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Header />
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
