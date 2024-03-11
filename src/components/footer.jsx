const Footer = (properties) => {
  const { homeIcon, shoppingIcon, heartIcon } = properties;
  return (
    <footer className="flex">
      <nav>
        <ul className="navBarFooter flex">
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
      </nav>
    </footer>
  );
};

export default Footer;
