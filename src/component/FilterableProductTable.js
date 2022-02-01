import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import productData from "../data/products";
import React from "react";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      inStockOnly: false
    };

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  }

  handleSearchBarChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <section>
        <div className="container is-max-desktop">
          <div className="box mx-6">
            <SearchBar onChange={this.handleSearchBarChange} />
            <ProductTable
              productData={productData}
              inStockOnly={this.state.inStockOnly}
              filter={this.state.productName}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default FilterableProductTable;
