import { Link, useNavigate } from "react-router-dom";
import loginLogo from "../../assets/LoginPage.svg";
import SocialLogin from "../Shared/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("User Login Successfully");
          form.reset();
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.code.slice(5, 50));
        console.log(error.code);
      });
    console.log(email, password);
  };
  return (
    <div>
      <div className="flex w-full my-12 max-w-sm mx-auto overflow-hidden bg-base-100 rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-5xl">
        <div className="hidden mx-6 my-6 lg:block lg:w-[45%]">
          <img src={loginLogo} alt="" />
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <h2 className="text-center mx-auto text-2xl font-bold">Login Now!</h2>
          <form onSubmit={handleLogin}>
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
                Password (6+ characters)
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
                Sign In
              </button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
          <p className="mt-8 text-xs font-light text-center text-gray-400">
            {" "}
            Dont have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
