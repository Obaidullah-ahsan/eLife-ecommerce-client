import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Headphones from "../Headphones/Headphones";
import Mobile from "../Mobile/Mobile";
import Smartwatch from "../Smartwatch/Smartwatch";
import Tablet from "../Tablet/Tablet";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="px-4 md:px-12 lg:px-24 mt-10 mb-14 2xl:mb-14 hidden lg:flex">
        <div className="px-4 border-r border-slate-300">
          <img
            className="h-9"
            src="https://assets.gadgetandgear.com/upload/media/1705403647671205.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-3 px-3 border-r border-slate-300">
          <img
            className="h-9"
            src="https://assets.gadgetandgear.com/upload/media/1700028373353456.png"
            alt=""
          />
          <p className="font-bold">Official Product</p>
        </div>
        <div className="flex items-center gap-3 px-3 border-r border-slate-300">
          <img
            className="h-9"
            src="https://assets.gadgetandgear.com/upload/media/1700028383550209.png"
            alt=""
          />
          <p className="font-bold">0% EMI</p>
        </div>
        <div className="flex items-center gap-3 px-3 border-r border-slate-300">
          <img
            className="h-9"
            src="https://assets.gadgetandgear.com/upload/media/1705401680347928.png"
            alt=""
          />
          <p className="font-bold">Exchange</p>
        </div>
        <div className="flex items-center gap-3 px-3 border-r border-slate-300">
          <img
            className="h-9"
            src="https://assets.gadgetandgear.com/upload/media/1700028399924595.png"
            alt=""
          />
          <p className="font-bold">Fastest Delivery</p>
        </div>
        <div className="flex items-center gap-3 px-3">
          <img
            className="h-9"
            src="https://assets.gadgetandgear.com/upload/media/1700028409214202.png"
            alt=""
          />
          <p className="font-bold">100% Secure Payment</p>
        </div>
      </div>
      <Categories />
      <Headphones />
      <div className="px-4 md:px-12 lg:px-24 my-10 2xl:my-14 flex flex-col md:flex-row gap-6">
        <img
          className="md:w-[49%]"
          src="https://assets.gadgetandgear.com/upload/media/655x343-airpods-4_1.png"
          alt=""
        />
        <img
          className="md:w-[49%]"
          src="https://assets.gadgetandgear.com/upload/media/655x343-apple-watch-series-10-banner_1.png"
          alt=""
        />
      </div>
      <Smartwatch />
      <div className="px-4 md:px-12 lg:px-24 my-10 2xl:my-14 flex gap-6">
        <img
          className="hover:shadow-md"
          src="https://assets.gadgetandgear.com/upload/media/1705388894998804.png"
          alt=""
        />
      </div>
      <Mobile />
      <Tablet />
    </div>
  );
};

export default Home;
