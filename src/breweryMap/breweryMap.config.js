export const mapInfoMaker = (name, city, state, url, phone) => (
  <div>
    <p>{name}</p>
    <p>
      {city}, {state}
    </p>
    <p>
      Call them on <b>{phone}</b> or visit their website
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          here
        </a>
      </p>
    </p>
  </div>
);

export const defaultInfo = "No 🍻 selected 🥺";
export const defaultMapCenter = [34.802528, -8.567037];
export const markerColor = "#23B757";
