import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/products/listProducts.css";
import { DataContext } from "../../context/DataContext";
import { data } from "../../data/dataProducts";
import Products from "./Products";
import Wave from "../icons/wave.js";
import Footer from "../layout/Footer";
import slugify from "slugify";

const ListProducts = () => {
  const {
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,
  } = useContext(DataContext);

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

  const [petCategory, setPetCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  // search
  const search = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container-list-products">
      <div className="padd-list-products" />

      <div className="components-products">
        <Products />
      </div>

      <div className="wave wave-bns">
        <Wave />
      </div>

      <div className="info-products">
        <div className="bn-primary-color" />

        <div className="container-products">
          <div className="title">
            <div className="container-title">
              <h3>
                <b>Bro!</b> Tenemos Super Ofertas!
              </h3>
            </div>
            <hr />
          </div>
          <div className="list-products">
            {data.filter((data) => data.price <= 300).length === 0 ? (
              <p className="no-data">
                No hay productos disponibles en esta categoría
              </p>
            ) : (
              data
                .filter((data) => data.price <= 300)
                .slice(0, 5)
                .map((products) => (
                  <div className="products" key={products.id}>
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
                        <div
                          className="content-input-quantity"
                          key={product.id}
                        >
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
      </div>

      <div className="wave wave-bnp">
        <Wave />
      </div>

      <div className="container-products">
        <div className="bn-secondary-color" />
        <div className="title">
          <div className="container-title">
            <h3>Productos para tus mejores amigos</h3>
            <div className="container-search">
              <input
                className="search"
                type="text"
                placeholder="Buscar..."
                onChange={search}
              />
            </div>
          </div>
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
              .filter((data) =>
                data.nameProduct
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((products) => (
                <div className="products" key={products.id}>
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

      <div className="wave wave-bns">
        <Wave />
      </div>

      <Footer />
    </div>
  );
};

export default ListProducts;
