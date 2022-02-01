import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function getCategories(data) {
  let cat = [];
  data.forEach((p) => {
    if (!cat.includes(p.category)) {
      cat.push(p.category);
    }
  });
  return cat;
}

function CategoryTable(props) {
  const { productData, category, inStockOnly } = props;
  const filteredProducts = productData.filter((p) => p.category === category);

  let stripedRow = true;
  return (
    <div>
      <ProductCategoryRow categoryName={category} key={category} />

      {filteredProducts.map(
        (p) =>
          (p.stocked || !inStockOnly) && (
            <ProductRow
              productName={p.name}
              productPrice={p.price}
              inStock={p.stocked}
              key={p.name}
              stripedRow={((stripedRow = !stripedRow), stripedRow)}
            />
          )
      )}
    </div>
  );
}

function ProductTable(props) {
  let { productData, filter, inStockOnly } = props;
  productData = productData.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );
  const categories = getCategories(productData);

  return (
    <div>
      {categories.map((cat) => (
        <CategoryTable
          category={cat}
          productData={productData}
          inStockOnly={inStockOnly}
        />
      ))}
    </div>
  );
}

export default ProductTable;
