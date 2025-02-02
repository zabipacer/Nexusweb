import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
// The layout with Navbar and Footer
import App from "./App"; // The home page
 // Species detail page
import Layout from "./Layout";
import Blogs from "./pages/Blogs";
import Work from "./pages/Work";
import { ParallaxProvider } from "react-scroll-parallax";
import BlogPost from "./pages/BlogPost";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, // Always show Layout (with Navbar & Footer)
    children: [
      {
        path: "/", // Home route
        element: <App />, // Show App component in the Layout
      },
      {
        path: "Blog", // Home route
        element: <ParallaxProvider>
        {/* Your app components */}
        <Blogs />
      </ParallaxProvider>, // Show App component in the Layout
      },
      {
        path: "Work", // Home route
        element: <Work />, // Show App component in the Layout
      },
      { path:"/post/:id" ,
        element:<BlogPost />}
    

  
     



      // Add more routes here as needed
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);