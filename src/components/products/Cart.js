import React, { useContext, useState } from "react";
import "../../style/products/cart.css";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";
import slugify from "slugify";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  //
  const {
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,
  } = useContext(DataContext);

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

  const onDeleteProduct = (products) => {
    const results = allProducts.filter((item) => item.id !== products.id);
    setTotal(total - products.price * products.quantity);
    setCountProducts(countProducts - products.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <>
      <div
        className={`blur ${activeCart ? "" : "active-blur"}`.trimEnd()}
        onClick={() => setActiveCart(!activeCart)}
      />
      <div className="container-cart">
        <span
          className={`icon-cart ${
            countProducts >= 1 ? "active-count" : ""
          }`.trimEnd()}
          onClick={() => setActiveCart(!activeCart)}
        />
        <span
          className={`icon-count ${
            countProducts >= 1 ? "active-count" : "disabled-count"
          }`.trimEnd()}
        >
          {countProducts}
        </span>
        <div
          className={`cart-nav ${activeCart ? "" : "active-cart"}`.trimEnd()}
        >
          <div className="container-list-cart">
            <div className="header-list-cart">
              <div className="count-products">
                <h4>Carrito</h4>
                <span>({countProducts})</span>
              </div>
              {/* <div className='icon-close-cart'> */}
              <span
                className="close-cart"
                onClick={() => setActiveCart(!activeCart)}
              />
              {/* </div> */}
            </div>
            {allProducts.length ? (
              <>
                <div className="content-list-cart">
                  {allProducts.map((products) => (
                    <div className="cart-products" key={products.id}>
                      <div className="quantity-img">
                        <span className="quantity">{products.quantity}</span>
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
                          />
                        </Link>
                      </div>
                      <div className="name-quantity">
                        <h4 className="name">{products.nameProduct}</h4>
                        <div className="content-input-quantity">
                          <button onClick={() => onRemove(products)}>-</button>
                          <input
                            className="input-quantity"
                            type="number"
                            min="0"
                            disabled
                            value={products.quantity}
                          />
                          <button onClick={() => onAdd(products)}>+</button>
                        </div>
                      </div>
                      <div className="content-prices">
                        <span className="price">$ {products.price}</span>
                        <span className="price">
                          $ {products.price * products.quantity}
                        </span>
                      </div>
                      <span
                        className="delete-product"
                        onClick={() => onDeleteProduct(products)}
                      />
                    </div>
                  ))}
                </div>
                <div className="content-clean">
                  <span className="clean-cart" onClick={() => onCleanCart()}>
                    Vaciar carrito
                  </span>
                </div>
                <div className="footer-list-cart">
                  <div className="total">
                    <h4>Total:</h4>
                    <span>${total}</span>
                  </div>
                  <button className="payment">Ir a pagar</button>
                </div>
              </>
            ) : (
              <>
                <div className="no-products">
                  <span>No hay productos en su carrito</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
