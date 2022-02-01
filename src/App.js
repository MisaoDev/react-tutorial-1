import "bulma/css/bulma.css";
import "./styles.css";
import FilterableProductTable from "./component/FilterableProductTable";
import Hero from "./component/Hero";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div className="App is-flex is-flex-direction-column">
      <Hero />
      <FilterableProductTable />
      <Footer />
    </div>
  );
}
