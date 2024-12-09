import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center md:pl-12 lg:pl-24 banner-bg-sm banner-bg h-[430px] lg:h-[580px]">
      <div className="text-center mx-auto md:text-left md:mx-0">
        <h3 className="text-gray-500 uppercase tracking-[.60em] mb-4">new product</h3>
        <h1 className="text-5xl text-white font-semibold tracking-[.10em] mb-6">XX99 MARK ll <br/> HEADPHONES</h1>
        <p className="max-w-[350px] text-gray-300 mb-6">
          Experience natural life like audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/products" className="btn hover:btn-outline bg-[#F26E21] text-white border-0 px-8 h-10 min-h-10 uppercase rounded-none">See product</Link>
      </div>
    </div>
  );
};

export default Banner;
