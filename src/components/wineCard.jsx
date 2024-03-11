const WineCard = (properties) => {
  const { wine } = properties;
  return (
    <div className="wineCard flex">
      <div>
        <img src={wine.image} className="wineImage" alt="The wine bottle" />
      </div>
      <div>
        <div>
          <div className="wineFlagAndTitle flex">
            <img
              className="flagImage"
              src={wine.flagimage}
              alt="The flag of the country the wine is from"
            />
            <h2 className="wineName">{wine.name}</h2>
          </div>
        </div>
        <p className="wineDescription">{wine.description}</p>
      </div>
    </div>
  );
};

export default WineCard;
