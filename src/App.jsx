import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Configator from "./components/Configator";
import Complect from "./components/Complect";
import Podershka from "./components/Podershka";
import About from "./components/About";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <HeroBanner />
        <ProductCard />
        <Configator />
        <Complect />
        <About/>
        <Podershka />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
