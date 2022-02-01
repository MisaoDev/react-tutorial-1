import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="mb-5">
        <div className="field">
          <div className="control">
            <input
              className="input"
              name="productName"
              type="text"
              placeholder="Search..."
              value={this.props.productName}
              onChange={this.props.onChange}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                name="inStockOnly"
                type="checkbox"
                className="mr-2"
                checked={this.props.inStockOnly}
                onChange={this.props.onChange}
              />
              Only show products in stock
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
