import React from "react";
import Footer from "./footer";
import Header from "./header";
import "../styles/index.scss";
import "../styles/layout.scss";

// images for gujarat form here https://unsplash.com/s/photos/gujarat

// about gujarat from here https://www.britannica.com/place/Gujarat/History

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div id="content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
