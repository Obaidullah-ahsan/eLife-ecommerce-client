import { RxCross2 } from "react-icons/rx";
import useCart from "../../Hooks/useCart";

const Checkout = () => {
  const [cart] = useCart();
  return (
    <div className="flex gap-6 px-4 md:px-12 lg:px-24 mt-6 mb-14 2xl:mb-14">
      <div className="w-[70%] bg-white px-6 rounded-md">
        <h1 className="py-6 text-2xl font-semibold uppercase">checkout</h1>
        <p className="text-[#F26E21] text-xs font-semibold uppercase">
          billing details
        </p>
        <form>
          <div className="grid grid-cols-2 gap-x-4">
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Name
              </label>
              <input
                className="block w-full text-sm px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Email Address
              </label>

              <input
                className="block w-full text-sm px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Phone Number
              </label>

              <input
                className="block w-full text-sm px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                placeholder="Enter your number"
                name="number"
                required
              />
            </div>
          </div>
          <p className="text-[#F26E21] text-xs font-semibold uppercase pt-10">
            Shipping info
          </p>
          <div className="grid grid-cols-2 gap-x-4">
            <div className="mt-4 col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Address
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Enter your address"
                name="address"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                City
              </label>

              <input
                className="block w-full text-sm px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Enter your city"
                name="city"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                ZIP Code
              </label>

              <input
                className="block w-full text-sm px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                placeholder="Enter your code"
                name="zipcode"
                required
              />
            </div>
          </div>
          <p className="text-[#F26E21] text-xs font-semibold uppercase pt-10 pb-6">
            Payment details
          </p>
        </form>
      </div>
      <div className="w-[30%] px-6 bg-white">
        <h1 className="py-6 text-lg font-semibold uppercase">summary</h1>
        <div className="flex flex-col gap-4">
          {cart?.map((product, idx) => (
            <div key={idx} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <img
                  className="object-cover w-[52px] h-12 rounded-lg bg-base-200 p-2"
                  src={product?.image}
                  alt=""
                />
                <div>
                  <h2 className="font-medium text-sm text-gray-800 dark:text-white ">
                    {product?.product_name}
                  </h2>
                  <p className="text-xs font-semibold text-gray-400 dark:text-white ">
                    ${product?.price}
                  </p>
                </div>
              </div>
              <p className="flex items-center text-sm text-gray-500">
                <RxCross2 size={12} />{product?.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
