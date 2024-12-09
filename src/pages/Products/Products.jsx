import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../Shared/ProductCard";
import { ScaleLoader } from "react-spinners";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://e-life-ecommerce-server.vercel.app/products", {
        params: {
          search,
          brand,
          category,
        },
      })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
  }, [search, brand, category]);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };
  return (
    <div className="my-12 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row gap-4 justify-center my-8">
        <form
          onSubmit={handleSearch}
          className="flex p-1 overflow-hidden border rounded"
        >
          <input
            className="px-2 w-full text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            name="productSearch"
            placeholder="Search products"
          />

          <button className="px-1 md:px-4 py-1 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#F26E21]">
            Search
          </button>
        </form>
        <select
          onChange={(e) => setBrand(e.target.value)}
          className="border p-2 rounded min-w-48 lg:min-w-60"
        >
          <option value="">All Brands</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
          <option value="Sony">Sony</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Microsoft">Microsoft</option>
          <option value="LG">LG</option>
          <option value="hp">Hp</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Dell">Dell</option>
          <option value="Philips">Philips</option>
          <option value="AKG">AKG</option>
        </select>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded min-w-48 lg:min-w-60"
        >
          <option value="">All Categories</option>
          <option value="headphone">Headphone</option>
          <option value="smartwatch">Smartwatch</option>
          <option value="laptop">Laptop</option>
          <option value="mobile">Mobile</option>
          <option value="tablet">Tablet</option>
        </select>
      </div>
      {loading === true ? (
        <div className="flex justify-center items-center min-h-96">
          <ScaleLoader />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
