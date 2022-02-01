import "./ProductRow.css";

function ProductRow(props) {
  const { inStock, stripedRow } = props;
  const bgClass = stripedRow && "has-background-white-bis";

  return (
    <div
      className={[bgClass, "is-flex", "is-justify-content-space-between"].join(
        " "
      )}
    >
      <span className={[inStock || "out-of-stock", ""].join(" ")}>
        {props.productName}
      </span>
      <span>{props.productPrice}</span>
    </div>
  );
}

export default ProductRow;
