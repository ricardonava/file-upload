import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FileUpload from "./components/FileUpload"

const App = () => {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div className="my-3">
        <h3>Cargo</h3>
      </div>

      <FileUpload />
    </div>)
}

export default App

