import axios from "axios";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import ProductCard from "../../Shared/ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Tablet = () => {
  const [tablets, setTablets] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://e-life-ecommerce-server.vercel.app/products/tablet")
      .then((res) => {
        setTablets(res.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="px-4 md:px-12 lg:px-24 my-10 2xl:my-14">
      <div>
        <div className="flex gap-3 mb-3">
          <span className="border-[4px] rounded-full border-black"></span>
          <h1 className="text-xl font-bold">Tablet</h1>
        </div>
        <h1 className="text-3xl font-bold">Explore Our Tablets</h1>
      </div>
      {loading === true ? (
        <div className="flex justify-center items-center min-h-96">
          <ScaleLoader />
        </div>
      ) : (
        <Swiper
          slidesPerView={2}
          loop={true}
          spaceBetween={3}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper mt-8"
        >
          {tablets.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product}></ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Tablet;
