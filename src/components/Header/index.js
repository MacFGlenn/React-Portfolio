import React, { useState } from "react";
import Navigation from "../Navigation/index.js";
import About from "../About/index.js";
import Contact from "../Contact/index";
import Portfolio from "../Portfolio/index";
import Resume from "../Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </nav>
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;
