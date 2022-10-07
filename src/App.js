import logo from "./logo.svg";
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
        {/* <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Tweets</p>
              <p className="title">3,456</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Following</p>
              <p className="title">123</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Followers</p>
              <p className="title">456K</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Likes</p>
              <p className="title">789</p>
            </div>
          </div>
        </nav> */}
        <BreweryMap />
      </QueryClientProvider>
    </div>
  );
}

export default App;
