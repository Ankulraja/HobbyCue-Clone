import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";
const Signup = () => {
  const [authPage, setAuthPage] = useState(true);
  const toggleHandler = (value) => {
    setAuthPage(value);
  };
  return (
    <div className=" ">
      <div className="flex items-center gap-5">
        <button
          onClick={() => {
            toggleHandler(true);
          }}
        >
          <h2
            className={`text-2xl ${
              authPage
                ? "text-purple-800 opacity-70 underline"
                : "text-gray-700 opacity-65"
            }  mb-6`}
          >
            Sign In
          </h2>
        </button>
        <button
          onClick={() => {
            toggleHandler(false);
          }}
        >
          <h2
            className={`text-2xl ${
              !authPage
                ? "text-purple-800 opacity-70 underline"
                : "text-gray-500 opacity-65"
            }   mb-6`}
          >
            Join In
          </h2>
        </button>
      </div>
      <button
        className="w-full group border border-gray-600 text-black hover:bg-red-500 hover:border-red-500
           hover:text-white  font-bold py-2 px-4 rounded mb-4 flex items-center justify-center"
      >
        <span className="flex items-center justify-center gap-2">
          <FcGoogle></FcGoogle> Continue with Google
        </span>
      </button>
      <button
        className="w-full group border border-gray-600 text-black hover:bg-blue-500 hover:border-blue-500
           hover:text-white font-bold py-2 px-4 rounded mb-4 flex items-center justify-center"
      >
        <span className="flex items-center justify-center gap-2">
          <SiFacebook className="text-blue-500 group-hover:text-white"></SiFacebook>{" "}
          Continue with Facebook
        </span>
      </button>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-500">Or connect with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <form className="text-left">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow bg-gray-100 py-2 appearance-none border rounded w-full pt-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between">
          {authPage ? (
            <label className="inline-flex items-center text-sm text-gray-700">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Remember me</span>
            </label>
          ) : (
            <div></div>
          )}
          <a
            className="inline-block align-baseline text-sm text-gray-500 hover:text-blue-800"
            href="/"
          >
            {!authPage ? "password strength" : "forgot password ?"}
          </a>
        </div>
        {authPage && (
          <div className="text-[13px] pt-1 italic text-gray-600 text-center">
            By continuing,you agree to our{" "}
            <span className="text-black font-semibold">Term and Service</span>{" "}
            and <span className="text-black font-semibold">privacy.</span>
          </div>
        )}
        <Link to={"/add-new"}>
          <div className="mt-6">
            <button
              className={`w-full ${
                authPage
                  ? "bg-transparent text-black border border-gray-500"
                  : "bg-purple-500 text-white"
              }  hover:bg-purple-600  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
              type="button"
            >
              {authPage ? "Continue" : "Agree and continue"}
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
};
export default Signup;
