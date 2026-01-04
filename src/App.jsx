import { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";

const initialProducts = [
  { id: 1, name: "Laptop", price: 60000, category: "Electronics", stock: 10, description: "" },
  { id: 2, name: "Phone", price: 30000, category: "Electronics", stock: 15, description: "" },
  { id: 3, name: "Headphones", price: 2000, category: "Accessories", stock: 30, description: "" },
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [view, setView] = useState("list");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  /* Debounce Search */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  /* Filter Products */
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  /* Pagination */
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSave = (product) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    setEditingProduct(null);
  };

  return (
    <div className="min-h-screen justify-center items-center bg-gradient-to-b from-slate-50 to-slate-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    
    <h1 className="text-3xl text-center font-bold text-slate-800 mb-6">
      Product Management
    </h1>

    {/* Controls */}
    {/* Controls */}
<section className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-5 mb-8">
  <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between  ">

    {/* Search */}
    <div className="relative  w-full md:w-1/2">
      <input
        type="text"
        placeholder="Search products by name..."
        className="input input-enhanced pl-10"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        🔍
      </span>
    </div>


  </div>
</section>


    <ProductForm onSave={handleSave} editingProduct={editingProduct} />

    {/* Product List Header */}
<section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
  
  {/* Title */}
  <div>
    <h2 className="text-xl font-bold text-slate-800">
      Product List
    </h2>
    <p className="text-sm text-slate-500">
      View and manage all products
    </p>
  </div>

  {/* View Toggle */}
  <div className="flex bg-white rounded-xl shadow-md border border-slate-200 p-1 w-fit">
    <button
      onClick={() => setView("grid")}
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition
        ${
          view === "grid"
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
            : "text-slate-600 hover:bg-slate-100"
        }`}
    >
      Grid View
    </button>

    <button
      onClick={() => setView("list")}
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition
        ${
          view === "list"
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
            : "text-slate-600 hover:bg-slate-100"
        }`}
    >
      List View
    </button>
  </div>

</section>


    <ProductList
      products={paginatedProducts}
      view={view}
      onEdit={setEditingProduct}
    />

    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  </div>
</div>

  );
}
