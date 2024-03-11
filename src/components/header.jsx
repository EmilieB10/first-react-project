const NavBar = (properties) => {
  const { logo, homeIcon, shoppingIcon, heartIcon } = properties;
  return (
    <header className="header flex">
      <div>
        <img className="logoImage" src={logo} alt="logo" />
      </div>
      <div>
        <h1>Wine for every occasion</h1>
      </div>
      <nav>
        <ul className="navBar flex">
          <li className="flex">
            <img className="navIcon" src={homeIcon} alt="" />
            <p>Home</p>
          </li>
          <li className="flex">
            <img className="navIcon" src={shoppingIcon} alt="" />
            <p>Shopping</p>
          </li>
          <li className="flex">
            <img className="navIcon" src={heartIcon} alt="" />
            <p>Favorite</p>
          </li>
        </ul>
        <div className="emptyDiv"></div>
      </nav>
    </header>
  );
};

export default NavBar;
