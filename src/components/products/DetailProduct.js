import { Link, useParams } from "react-router-dom";
import "../../style/products/detailProduct.css";
import slugify from "slugify";
import Wave from "../icons/wave.js";
import Footer from "../layout/Footer";
import { data } from "../../data/dataProducts";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

const DetailProduct = () => {
  // Obtiene el valor del parámetro de la URL/Ruta
  const { slug } = useParams();
  // console.log(slug);

  // Obtiene todo antes del "-"
  const namePart = slug.substring(0, slug.lastIndexOf("-"));
  // console.log(namePart);

  // Obtiene todo luego del "-"
  const idPart = parseInt(slug.substring(slug.lastIndexOf("-") + 1));
  // console.log(idPart);

  // Busca el producto correspondiente según el slug y la Id en la data de productos
  const detailProduct = data.find(
    (product) =>
      slugify(product.nameProduct, { lower: true }) === namePart &&
      product.id === idPart
  );

  // Use context
  const { allProducts, onAddProduct, onAdd, onRemove } =
    useContext(DataContext);

  return (
    <div className="container-detail-product">
      {/* Si se encuentra */}
      {detailProduct ? (
        <div className="content-detail-product" key={detailProduct.id}>
          <div className="bn-secondary-color" />
          <div className="details">
            <div className="details-image">
              <img
                src={detailProduct.urlImage}
                alt={detailProduct.nameProduct}
                title={detailProduct.nameProduct}
                loading="lazy"
              />
              {/* {console.log("detailProduct.urlImage:", detailProduct.urlImage)} */}
            </div>
            <div className="details-content">
              <div className="details-text">
                <span className="brand">{detailProduct.brand}</span>
                <h2>{detailProduct.nameProduct}</h2>
              </div>
              <div className="details-price">
                <p> ${detailProduct.price}</p>
              </div>
              <div className="details-desc">
                <p>{detailProduct.desc}</p>
              </div>
              <div className="details-add">
                {allProducts
                  .filter((products) => products.id === detailProduct.id)
                  .map((products) => (
                    <div key={products.id}>
                      <div className="price-details-product">
                        <span>$ {products.price * products.quantity}</span>
                      </div>
                      <div className="content-input-quantity">
                        <button
                          onClick={() => onRemove(products)}
                          disabled={products.quantity === 0}
                        >
                          -
                        </button>
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
                  ))}

                <div className="button-buys">
                  <button
                    className="buys"
                    onClick={() => onAddProduct(detailProduct)}
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="content-detail-product">
          <div className="bn-secondary-color" />
          <p className="no-data-products">No se encontró el producto</p>
        </div>
      )}

      {/* Similar prod */}
      <div className="similar-product">
        <div className="bn-secondary-color" />
        <div className="content-similar">
          <h2>Productos que te pueden interesar</h2>
          <div className="list-products">
            {data.filter((data) => data.category === detailProduct.category)
              .length === 0 ? (
              <p className="no-data">
                No hay productos disponibles en esta categoría
              </p>
            ) : (
              data
                .filter((data) => data.category === detailProduct.category)
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

      <div className="wave wave-bns">
        <Wave />
      </div>

      <Footer />
    </div>
  );
};

export default DetailProduct;
