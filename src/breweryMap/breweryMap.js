import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import "./breweryMap.scss";
import { mapInfoMaker } from "./breweryMap.config";

const fetchBreweries = async () => {
  const res = await fetch("https://api.openbrewerydb.org/breweries");
  return res.json();
};
// onclick marker set centered state
// open modal of info
// search certain areas
// filter
const defaultInfo = "No 🍻 selected 🥺";
const BreweryMap = () => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery("breweries", fetchBreweries);
  const [mapCenter, setMapCenter] = useState([]);
  const [zoom, setZoom] = useState(4);
  const [selectedBrewery, setSelectedBrewery] = useState(defaultInfo);

  const resetMap = () => {
    setZoom(4);
    setSelectedBrewery(defaultInfo);
  };
  const defaultMapCenter = [34.802528, -8.567037];
  const markerColor = "#23B757";

  data.forEach((d) => console.log(d));

  return (
    <div className="container">
      <div className="section">
        <div className="box">{selectedBrewery}</div>
        <div className="button-wrapper">
          <button className="button is-danger" onClick={resetMap}>
            Reset Map
          </button>
        </div>
        <Map
          height={400}
          defaultCenter={defaultMapCenter}
          center={mapCenter}
          defaultZoom={2.5}
          zoom={zoom}
        >
          <ZoomControl />
          {data.map((d, index) => {
            const {
              latitude,
              longitude,
              name,
              city,
              state,
              website_url: url,
              brewery_type: type,
              phone,
            } = d;

            return latitude && longitude ? (
              <Marker
                key={index}
                width={50}
                color={markerColor}
                anchor={[parseFloat(latitude), parseFloat(longitude)]}
                onClick={() => {
                  setMapCenter([latitude, longitude]);
                  setZoom(8);
                  setSelectedBrewery(
                    mapInfoMaker(name, city, state, url, phone)
                  );
                }}
              />
            ) : null;
          })}
        </Map>
      </div>
    </div>
  );
};

export default BreweryMap;
