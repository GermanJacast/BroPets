import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  // Add products to cart / update quantity
  const onAddProduct = (product) => {
    let updatedProducts;

    if (allProducts.find((item) => item.id === product.id)) {
      updatedProducts = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
    } else {
      updatedProducts = [...allProducts, product];
    }

    const updatedCountProducts = countProducts + product.quantity;
    const updatedTotal = total + product.price * product.quantity;

    setAllProducts(updatedProducts);
    setCountProducts(updatedCountProducts);
    setTotal(updatedTotal);
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

  //
  const contextValues = {
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,
    onAddProduct,
    onAdd,
    onRemove,
  };

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
