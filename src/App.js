import logo from "./logo.svg";
import { QueryClient, QueryClientProvider } from "react-query";
import BreweryMap from "./breweryMap/breweryMap";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            My Local Brewery <span className="beer-emoji">🍻</span>
          </p>
          <p class="subtitle">Find a Brewery Near You</p>
        </div>
      </section>
      <QueryClientProvider client={queryClient}>
        <BreweryMap />
      </QueryClientProvider>
    </div>
  );
}

export default App;
