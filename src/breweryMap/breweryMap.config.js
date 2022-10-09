export const mapInfoMaker = (name, city, state, url, phone) => (
  <div>
    <p>{name}</p>
    <p>
      {city}, {state}
    </p>
    <div>
      Call them on <b>{phone}</b> or visit their website
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          here
        </a>
      </p>
    </div>
  </div>
);

export const defaultInfo = "No 🍻 selected 🥺";
export const defaultMapCenter = [34.802528, -8.567037];
export const markerColor = "#23B757";
export const defaultZoom = 2.5;

export const resetMap = (setZoom, setSelectedBrewery, setMapCenter) => {
  setZoom(defaultZoom);
  setSelectedBrewery(defaultInfo);
  setMapCenter(defaultMapCenter);
};

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const handleTypeFilterChange = (filterValue, value, setBreweryData, data) => {
  const filteredData = value
    ? data.filter((d) => d[filterValue] === value)
    : data;
  setBreweryData(filteredData);
};

export const filterLevel = (uniqueTypes, setBreweryData, data) => (
  <nav className="level">
    <div className="level-item has-text-centered">
      <div>
        <h5>Brewery Type</h5>
        <div className="select">
          <select
            onChange={(e) =>
              handleTypeFilterChange(
                "brewery_type",
                e.target.value,
                setBreweryData,
                data
              )
            }
          >
            <option>All brewery types</option>
            {uniqueTypes.map((type) => (
              <option key={type} value={type}>
                {capitalizeFirstLetter(type)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  </nav>
);

export const getUniqueValues = (data, value) => {
  const uniqueValues = [];
  for (let i = 0; i < data.length; i++) {
    if (!uniqueValues.includes(data[i][value])) {
      data[i][value] && uniqueValues.push(data[i][value]);
    }
  }
  return uniqueValues;
};
