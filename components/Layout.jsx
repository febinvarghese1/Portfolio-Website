import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className=" w-full overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
