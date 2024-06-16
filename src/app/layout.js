import React from "react";
import Navbar from "./components/Navbar";
import "./styles/globals.css"; // Updated path

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
