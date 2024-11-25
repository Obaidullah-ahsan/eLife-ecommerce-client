import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("User Login Successfully");
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        toast.error(error.code.slice(5, 50));
      });
  };

  return (
    <div>
      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>
        <a className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
          or login with Social Media
        </a>
        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
      </div>
      <div className=" flex items-center mt-6">
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="btn btn-outline w-full rounded-full flex items-center justify-center"
        >
          <img
            src="https://i.postimg.cc/Nf0HsXsj/Google-G-logo-svg.png"
            className="max-w-5 max-h-5"
            alt=""
          />
          <span className="mx-2">Continue With Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
