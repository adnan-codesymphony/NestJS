import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

/* let allRoutes = createBrowserRouter([
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ],
]); */

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App /> 
  </StrictMode>
);
