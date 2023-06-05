import { useLocation } from "react-router-dom";
import "../../style/theme/App.css";
import Header from "../layout/Header";
//
import DataProvider from "../../context/DataContext";
import { useEffect } from "react";

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

export default App;
