import React from "react";
import Form from "./components/Form";
import "./App.css";
import ResumeView from "./components/ResumeView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Prepare for getting a job!</h1>
      </header>
      <div className="split">
        <Form />
        <ResumeView />
      </div>
    </div>
  );
}

export default App;
