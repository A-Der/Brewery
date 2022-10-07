import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Map, Marker, ZoomControl } from "pigeon-maps";

const fetchBreweries = async () => {
  const res = await fetch("https://api.openbrewerydb.org/breweries");
  return res.json();
};
// onclick marker set centered state
// open modal of info
// search certain areas
// filter
const BreweryMap = () => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery("breweries", fetchBreweries);
  const [defaultMapCenter, setDefaultMapCenter] = useState([
    34.802528, -8.567037,
  ]);
  const [mapCenter, setMapCenter] = useState([]);
  const [zoom, setZoom] = useState(4);

  return (
    <div className="container">
      <div className="notification is-primary">
        <Map
          height={400}
          defaultCenter={defaultMapCenter}
          center={mapCenter}
          defaultZoom={2.5}
          zoom={zoom}
        >
          <ZoomControl />
          {data.map(
            ({ latitude, longitude }, index) =>
              latitude &&
              longitude && (
                <Marker
                  key={index}
                  width={50}
                  anchor={[parseFloat(latitude), parseFloat(longitude)]}
                  onClick={() => {
                    setMapCenter([latitude, longitude]);
                    setZoom(8);
                  }}
                />
              )
          )}
        </Map>
      </div>
    </div>
  );
};

export default BreweryMap;
