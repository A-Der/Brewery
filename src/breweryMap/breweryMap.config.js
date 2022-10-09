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

const select = () => (
  <div class="select">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
);

export const filterLevel = (
  uniqueTypes,
  uniqueStates,
  setTypeFilterValue,
  setStateFilterValue
) => (
  <nav className="level">
    <div className="level-item has-text-centered">
      <div>
        <h5>Brewery Type</h5>
        <div className="select">
          <select onChange={(e) => setTypeFilterValue(e.target.value)}>
            <option>Select a brewery type...</option>
            {uniqueTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <h5>State</h5>
        <div className="select">
          <select onChange={(e) => setStateFilterValue(e.target.value)}>
            <option>Select a state...</option>
            {uniqueStates.map((type) => (
              <option key={type} value={type}>
                {type}
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
