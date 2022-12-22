import "./App.css";
import Listing from "./Components/Listing/Listing";
import data from "./data/etsy.json";

const App = () => {
  return (
    <>
      <Listing data={data} />
    </>
  );
};

export default App;
