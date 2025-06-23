import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <HeroBanner />
        <ProductCard />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
