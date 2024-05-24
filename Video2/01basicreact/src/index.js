import React from "react"; // core foundational library which takes references
import ReactDOM from "react-dom/client"; // the library helps in manupulating the web dom // ReactDOM => for web implementation
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ReactDOM is just DOM(and it's a virtual DOM made by react (i))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
