import { useContext, useState } from "react";
import "../../style/products/products.css";
import { data } from "../../data/dataProducts";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";
import slugify from "slugify";

const Products = () => {
  // Use context
  const {
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,
  } = useContext(DataContext);

  // Add products to cart / update quantity
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCountProducts(countProducts + product.quantity);
      setTotal(total + product.price * product.quantity);

      return setAllProducts([...products]);
    }

    setCountProducts(countProducts + product.quantity);
    setTotal(total + product.price * product.quantity);
    setAllProducts([...allProducts, product]);
  };
  // console.log(allProducts)

  //Add 1 by 1 because the other multiplies (adds more than necessary)
  const onAdd = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCountProducts(countProducts + 1);
      setTotal(total + product.price);

      return setAllProducts([...products]);
    }
  };
  //Remove 1 by 1, without being negative...
  const onRemove = (product) => {
    if (
      allProducts.find((item) => item.id === product.id && item.quantity > 1)
    ) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCountProducts(countProducts - 1);
      setTotal(total - product.price);

      return setAllProducts([...products]);
    } else {
      const results = allProducts.filter((item) => item.id !== product.id);
      setAllProducts(results);
      setCountProducts(countProducts - 1);
      setTotal(total - product.price);
    }
  };

  // category state
  const [petCategory, setPetCategory] = useState("all");

  return (
    <div className="container-products">
      <div className="bn-secondary-color" />

      <div className="title">
        <h3>Esenciales para el cuidado de sus mejores amigos</h3>
        <hr />
        <div className="container-category">
          <button onClick={() => setPetCategory("all")}>Todos</button>
          <button onClick={() => setPetCategory("dog")}>Perros</button>
          <button onClick={() => setPetCategory("cat")}>Gatos</button>
          <button onClick={() => setPetCategory("rabbit")}>Conejos</button>
        </div>
      </div>

      <div className="list-products">
        {data.filter(
          (data) => data.category === petCategory || petCategory === "all"
        ).length === 0 ? (
          <p className="no-data">
            No hay productos disponibles en esta categoría
          </p>
        ) : (
          data
            .filter(
              (data) => data.category === petCategory || petCategory === "all"
            )
            // top sales
            .filter((product) => product.sales >= 1)
            //
            .map((products) => (
              <div className="products" key={products.id}>
                {/* encrypt? */}
                <Link
                  to={`/productos/${slugify(
                    `${products.nameProduct}-${products.id}`,
                    {
                      lower: true,
                    }
                  )}`}
                >
                  <img
                    src={products.urlImage}
                    className="image"
                    title={products.nameProduct}
                    alt={products.nameProduct}
                    loading="lazy"
                  />
                </Link>
                <span className="brand">{products.brand}</span>
                <div className="content-name">
                  <h4 className="name">{products.nameProduct}</h4>
                </div>
                <span className="price">$ {products.price}</span>
                {allProducts
                  .filter((product) => product.id === products.id)
                  .map((product) => (
                    <div className="content-input-quantity" key={product.id}>
                      <button
                        onClick={() => onRemove(product)}
                        disabled={product.quantity === 0}
                      >
                        -
                      </button>
                      <input
                        className="input-quantity"
                        type="number"
                        min="0"
                        disabled
                        value={product.quantity}
                      />
                      <button onClick={() => onAdd(product)}>+</button>
                    </div>
                  ))}
                <div className="button-buys">
                  <button
                    className="buys"
                    onClick={() => onAddProduct(products)}
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Products;
