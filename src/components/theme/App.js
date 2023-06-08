import React from "react";
import { useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import "../../style/theme/App.css";
import Header from "../layout/Header";
import Loading from "../misc/Loanding";
//
import DataProvider from "../../context/DataContext";

function App() {
  const location = useLocation();

  useEffect(() => {
    let pageTitle = "BroPets";
    // Condición para que se cambie el nombre...blabla
    if (location.pathname !== "/") {
      // Elimina el carácter (/)
      let pathName = location.pathname.slice(1);
      // Primera letra en mayúscula
      pageTitle = "| " + pathName.charAt(0).toUpperCase() + pathName.slice(1);
    } else {
      pageTitle = "";
    }
    // m
    document.title = `BroPets ${pageTitle}`;
  }, [location]);
  return (
    <DataProvider>
      <>
        <Header />
      </>
    </DataProvider>
  );
}

function LazyApp() {
  return (
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  );
}

// export default App;
export default LazyApp;
