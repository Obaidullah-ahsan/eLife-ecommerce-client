import { Link, useNavigate } from "react-router-dom";
import SignupLogo from "../../assets/SignupPageLogo.svg";
import SocialLogin from "../Shared/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        updateUser(name, photo)
          .then(() => {
            const userInfo = {
              email,
              name,
              role: "customer",
            };
            axios.post("http://localhost:5000/users", userInfo).then((res) => {
              console.log(res.data);
            });
            toast.success("User Register Successfully");
            form.reset();
            // when user Successfully register user navigate homepage
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.code.slice(5, 50));
          });
        console.log(result.user);
      })
      .catch((error) => {
        toast.error(error.code.slice(5, 50));
      });
    console.log(email, password);
  };
  return (
    <div>
      <div className="flex w-full my-12 px-4 md:px-12 lg:px-24 mx-auto overflow-hidden bg-base-100 rounded-lg shadow-lg dark:bg-gray-800">
        <div className="hidden mt-28 mx-6 lg:block lg:w-1/2">
          <img src={SignupLogo} alt="" />
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <h2 className="text-center mx-auto text-2xl font-bold">
            Register Now!
          </h2>
          <form onSubmit={handleRegister}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Name
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Photo URL
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Enter your photo url"
                name="photo"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Email Address
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Password
              </label>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>
            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign Up
              </button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
          <p className="mt-8 text-xs font-light text-center text-gray-400">
            {" "}
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
