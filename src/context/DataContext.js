// import axios from 'axios';
import React, { createContext, useState } from "react";
// import {data} from '../data/data';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // const Data = {data};
  // const [dataProducts, setDataProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  //  useEffect(()=>{
  //   setDataProducts([Data]);
  //   // setAllProducts([...allProducts, Data])
  //   // axios.get('../data.json').then((res)=> setAllProducts(res.allProducts));
  //   // setAllProducts([Data])
  //   console.log(dataProducts)
  // },[]);

  return (
    <DataContext.Provider
      value={{
        // dataProducts,
        // setDataProducts,
        allProducts,
        setAllProducts,
        total,
        setTotal,
        countProducts,
        setCountProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
