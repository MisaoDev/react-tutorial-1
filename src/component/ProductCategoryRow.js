function ProductCategoryRow(props) {
  return (
    <h2
      className={[
        "is-size-5",
        "has-background-grey-lighter",
        "pt-2",
        "my-3",
        "has-text-weight-bold"
      ].join(" ")}
    >
      {props.categoryName}
    </h2>
  );
}

export default ProductCategoryRow;
