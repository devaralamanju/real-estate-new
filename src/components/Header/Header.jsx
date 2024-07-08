import React, { useState } from "react";
import "./Header.css";
import SignUpLogin from "../SignUpLogin/SignUpLogin";
import Drawer from "react-drawer";
import "react-drawer/lib/react-drawer.css";

const Header = () => {
  const [dropdowns, setDropdowns] = useState({
    buy: false,
    rent: false,
    mortgage: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [dropdown]: !prevDropdowns[dropdown],
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 198.96 50.44"
          width="70"
          height="24"
          role="img"
          class="svg"
          aria-label="Trulia Logo"
          aria-hidden="false"
        >
          <path d="M147.71 11a5.51 5.51 0 1 0-5.5-5.51 5.51 5.51 0 0 0 5.5 5.51zm4.99 29.56V14.64h-15.5v9.28h6.22v25.92h15.49v-9.28h-6.21zm-26.49 0V2.54h-15.49v9.28h6.21v28.74h-6.21v9.28h21.7v-9.28h-6.21zM60.25 14.52h-2.81a12.17 12.17 0 0 0-10.75 5.39l-1.89-5.27h-9.11v9.28H40v25.92h9.28V31.72a8.16 8.16 0 0 1 8.16-8.16h2.81zm42.98 18.35V14.64H94V33.2a8.29 8.29 0 0 1-16.58 0V14.64h-9.33v18.23a17.57 17.57 0 0 0 35.14 0zM27.6 23.92v-9.28H15.49V3.28H6.22v11.36H0v9.28h6.22v8.92a17.56 17.56 0 0 0 17.56 17.57A17.74 17.74 0 0 0 27.6 50v-9.17a9.28 9.28 0 0 1-3.18.56 8.78 8.78 0 0 1-8.93-8.61v-8.86zm162.09-9.28v3.5a13.08 13.08 0 0 0-9.14-4h-.72c-9.17 0-16.6 8.12-16.6 18.15s7.43 18.19 16.6 18.15h.72a13.08 13.08 0 0 0 9.14-4v3.5H199v-35.3zm-8.81 26.82a9.06 9.06 0 0 1-8.88-9.23 8.85 8.85 0 1 1 17.69 0 9 9 0 0 1-8.81 9.23z"></path>
        </svg>
      </div>
      <nav>
        <ul className="left-side">
          <li>
            <button onClick={() => toggleDropdown("buy")}>Buy</button>
            {dropdowns.buy && (
              <div className="dropdown">
                <a href="#"><b>Austin</b></a>
                <a href="#">Homes for Sale</a>
                <a href="#">Open Houses</a>
                <a href="#">New Homes</a>
                <a href="#">Recently Sold</a>

              </div>
            )}
          </li>
          <li>
            <button onClick={() => toggleDropdown("rent")}>Rent</button>
            {dropdowns.rent && (
              <div className="dropdown">
                <a href="#"><b>Austin</b></a>
                <a href="#">All Rentals</a>
                <a href="#">Apartments for Rent</a>
                <a href="#">Houses for Rent</a>
                <a href="#">Post A Rental Listing</a>
              </div>
            )}
          </li>
          <li>
            <button onClick={() => toggleDropdown("mortgage")}>Mortgage</button>
            {dropdowns.mortgage && (
              <div className="dropdown">
                <a href="#">Mortgage Option 1</a>
                <a href="#">Mortgage Option 2</a>
              </div>
            )}
          </li>
        </ul>
        <ul className="right-side">
          <li>
            <button onClick={openModal}>Saved Homes</button>
          </li>
          <li>
            <button onClick={openModal}>Saved Searches</button>
          </li>
          <li>
            <button className="btn_signup">Sign up or Log in</button>
          </li>
        </ul>
        <button className="drawer-toggle" onClick={toggleDrawer}>
          ☰
        </button>
      </nav>
      <SignUpLogin isOpen={isModalOpen} onRequestClose={closeModal} />
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="right"
        className="drawer"
      >
        <div className="drawer-content">
          <button>Saved Homes</button>
          <button>Saved Searches</button>
          <button onClick={openModal}>Sign up or Log in</button>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
