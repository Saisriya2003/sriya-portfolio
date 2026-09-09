import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

document.documentElement.classList.add("js");
if (new URLSearchParams(window.location.search).has("all")) {
  document.documentElement.classList.add("show-all");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
