import { QueryClient, QueryClientProvider } from "react-query";
import BreweryMap from "./breweryMap/breweryMap";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title is-justify-content-center is-align-content-center">
            My Local Brewery <span className="beer-emoji">🍻</span>
          </p>
          <p className="subtitle">Find a Brewery Near You</p>
        </div>
      </section>
      <QueryClientProvider client={queryClient}>
        <BreweryMap />
      </QueryClientProvider>
    </div>
  );
}

export default App;
