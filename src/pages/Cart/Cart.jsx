import axios from "axios";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, cartRefetch] = useCart();
  const handleCartDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            cartRefetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleQuantityPlus = (id, quantity) => {
    const updatedQuantity = {
      quantity: quantity + 1,
    };
    axios
      .patch(`http://localhost:5000/cart/quantity/${id}`, updatedQuantity)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          cartRefetch();
        }
      });
  };

  const handleQuantityMinus = (id, quantity) => {
    console.log(quantity);
    const updatedQuantity = {
      quantity: quantity - 1,
    };
    axios
      .patch(`http://localhost:5000/cart/quantity/${id}`, updatedQuantity)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          cartRefetch();
        }
      });
  };
  return (
    <div>
      <div className="px-4 md:px-12 lg:px-24 mt-6 mb-14 2xl:mb-14">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-3">
            <h2 className="text-xl font-bold uppercase ml-2 text-gray-800 dark:text-white">
              Cart Items
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {cart.length} Items
            </span>
          </div>
          <Link
            to="/checkout"
            className={`${cart.length < 1 ? "btn-disabled" : "bg-[#F26E21] text-white border-none hover:bg-black"} btn rounded-none min-h-10 h-10`}
          >
            Pay Now
          </Link>
        </div>

        <div className="flex flex-col mt-4">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Product Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        SubTotal
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  {cart?.map((product, idx) => (
                    <tbody
                      key={idx}
                      className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                    >
                      <tr>
                        <td className="px-4 py-4 text-center">
                          <div className="inline-flex items-center gap-x-3">
                            <img
                              className="object-cover w-10 h-10 rounded-lg"
                              src={product.image}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div>
                            <h2 className="font-medium text-gray-800 dark:text-white ">
                              {product.product_name}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          ${product?.price}
                        </td>
                        <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div className="flex items-center justify-center gap-3 border p-1">
                            <button
                              onClick={() =>
                                handleQuantityMinus(
                                  product?._id,
                                  product?.quantity
                                )
                              }
                              className={`${
                                product?.quantity === 1
                                  ? "btn-disabled text-base-300"
                                  : "text-black"
                              }`}
                            >
                              <FaMinus />
                            </button>
                            <p>{product?.quantity}</p>
                            <button
                              className="text-black"
                              onClick={() =>
                                handleQuantityPlus(
                                  product?._id,
                                  product?.quantity
                                )
                              }
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          ${product?.price * product?.quantity}
                        </td>
                        <td className="px-4 py-4 text-center text-sm whitespace-nowrap">
                          <button
                            onClick={() => handleCartDelete(product._id)}
                            className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
