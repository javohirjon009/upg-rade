import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Pwnage Stormbreaker",
    price: "1 999 000",
    image: "/images/stormbreaker.jpg",
  },
  // Add more products here
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        UPGrade
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length > productsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Home;
