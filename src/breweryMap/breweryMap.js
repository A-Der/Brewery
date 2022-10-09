import { useState } from "react";
import { useQuery } from "react-query";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import "./breweryMap.scss";
import {
  defaultInfo,
  defaultMapCenter,
  defaultZoom,
  filterLevel,
  getUniqueValues,
  mapInfoMaker,
  markerColor,
  resetMap,
} from "./breweryMap.config";

const fetchBreweries = async () => {
  const res = await fetch("https://api.openbrewerydb.org/breweries");
  return res.json();
};

const BreweryMap = () => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery("breweries", fetchBreweries);
  const [mapCenter, setMapCenter] = useState([]);
  const [zoom, setZoom] = useState(4);
  const [selectedBrewery, setSelectedBrewery] = useState(defaultInfo);
  const [breweryData, setBreweryData] = useState([]);
  const uniqueTypes = getUniqueValues(data, "brewery_type");

  return (
    <div className="container">
      <div className="section">
        {filterLevel(uniqueTypes, setBreweryData, data)}
        <div className="box">{selectedBrewery}</div>
        <div className="button-wrapper">
          <button
            className="button is-danger"
            onClick={() => resetMap(setZoom, setSelectedBrewery, setMapCenter)}
          >
            Reset Map
          </button>
        </div>
        <Map
          height={400}
          defaultCenter={defaultMapCenter}
          center={mapCenter}
          defaultZoom={defaultZoom}
          zoom={zoom}
        >
          <ZoomControl />
          {(breweryData.length > 0 ? breweryData : data).map((d, index) => {
            const {
              latitude,
              longitude,
              name,
              city,
              state,
              website_url: url,
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
