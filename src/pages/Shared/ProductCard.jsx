import { CiHeart } from "react-icons/ci";

const ProductCard = ({ product }) => {
  const { product_name, price, image} = product;
  return (
    <div className="card py-4 bg-white rounded-none card-compact hover:scale-110 ease-in-out duration-300">
      <figure>
        <img
          className="p-5 h-36 md:h-[200px] w-full relative"
          src={image}
          alt="Shoes"
        />
        <CiHeart
          size={30}
          className="bg-base-200 p-1 rounded-full absolute top-3 right-3"
        />
      </figure>
      <div className="card-body">
        <h2 className="md:text-lg font-bold">{product_name}</h2>
        <p className="text-[#F26E21] text-lg font-bold">Tk. {price}</p>
        <div className="flex gap-4">
          <button className="btn min-h-9 h-9 text-[#F26E21] bg-[#ffdcc8] hover:bg-[#F26E21] hover:text-white rounded-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
