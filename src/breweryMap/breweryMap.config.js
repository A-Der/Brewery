export const mapInfoMaker = (name, city, state, url, phone) => (
  <>
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
  </>
);
