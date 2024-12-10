import axios from "axios";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import ProductCard from "../Shared/ProductCard";

const AllSmartwatch = () => {
  const [smartwatch, setSmartwatch] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/products/smartwatch").then((res) => {
      setSmartwatch(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="px-4 md:px-12 lg:px-24 my-10 2xl:my-14">
      <div>
        <div className="flex gap-3 mb-3">
          <span className="border-[4px] rounded-full border-black"></span>
          <h1 className="text-xl font-bold">Smartwatch</h1>
        </div>
        <h1 className="text-3xl font-bold">New Handwear Collection</h1>
      </div>
      {loading === true ? (
        <div className="flex justify-center items-center min-h-96">
          <ScaleLoader />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
          {smartwatch.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllSmartwatch;
