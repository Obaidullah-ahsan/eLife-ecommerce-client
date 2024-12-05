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
      <Categories />
      <Headphones />
      <div className="px-4 md:px-12 lg:px-24 my-10 2xl:my-14 flex gap-6">
        <img
          className="w-[49%]"
          src="https://assets.gadgetandgear.com/upload/media/655x343-airpods-4_1.png"
          alt=""
        />
        <img
          className="w-[49%]"
          src="https://assets.gadgetandgear.com/upload/media/655x343-apple-watch-series-10-banner_1.png"
          alt=""
        />
      </div>
      <Smartwatch />
      <div  className="px-4 md:px-12 lg:px-24 my-10 2xl:my-14 flex gap-6">
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
