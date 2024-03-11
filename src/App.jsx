import "./App.css";
import WineCard from "./components/wineCard";
import { wines } from "../wines.json";
import NavBar from "./components/header";
import logo from "./images/winelogo.svg";
import headerImage from "./images/headerimage2.jpg";
import Footer from "./components/footer";
import homeIcon from "./images/houseIcon.svg";
import shoppingIcon from "./images/ShoppingIcon.svg";
import heartIcon from "./images/HeartIcon.svg";

import { getImageURL } from "./utils/image-utils";

function App() {
  return (
    <>
      <NavBar
        logo={logo}
        homeIcon={homeIcon}
        shoppingIcon={shoppingIcon}
        heartIcon={heartIcon}
      />
      <div className="container">
        <img
          className="headerImage2"
          src={headerImage}
          alt="wine bottle, 2 wineglasses with wine and some flowers in front"
        />
        {wines.map((wine) => {
          return (
            <WineCard key={wine.id} wine={wine} getImageURL={getImageURL} />
          );
        })}
      </div>
      <Footer
        homeIcon={homeIcon}
        shoppingIcon={shoppingIcon}
        heartIcon={heartIcon}
      />
    </>
  );
}

export default App;
