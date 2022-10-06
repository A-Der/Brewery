import { useQuery } from "react-query";
import { Map, Marker } from "pigeon-maps";

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

  return (
    <div className="container">
      <div className="notification is-primary">
        <Map
          height={300}
          defaultCenter={[41.289715, -86.627954]}
          defaultZoom={11}
        >
          {data.map((d) => {
            return (
              <Marker
                width={50}
                anchor={[parseFloat(d.latitude), parseFloat(d.longitude)]}
              />
            );
          })}
        </Map>
      </div>
    </div>
  );
};

export default BreweryMap;
