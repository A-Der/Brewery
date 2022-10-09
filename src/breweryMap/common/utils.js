export const loadingSpinner = () => {
  return (
    <div className="spinner container-small">
      <div className="loading-spinner"></div>
    </div>
  );
};

export const isErrorMessage = () => {
  return (
    <div className="container-small">
      <div className="error">Error fetching data, please contact support</div>
    </div>
  );
};
