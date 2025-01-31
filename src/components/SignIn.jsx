import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../context/auth-context";

function Login() {
  const {
    handleLogin,
    handleGoogleSignin,
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
  } = useAuthContext();

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        >
          <h1 className="text-black text-4xl font-bold mb-4 text-center">
            Log In
          </h1>
          <p className="text-gray-600 text-base font-normal mb-6 text-center">
            Enter your credentials below
          </p>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              id="emailOrNumber"
              name="emailOrNumber"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|\d+"
              placeholder="Enter email or number"
              required
              className="border-b-2 border-gray-300 p-2 focus:border-black focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-full">
              <input
                type={passwordVisibility ? "text" : "password"}
                placeholder="Password"
                id="passWordBox"
                className="border-b-2 border-gray-300 p-2 focus:border-black focus:outline-none w-full"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisibility ? (
                  <FaRegEyeSlash size="20" />
                ) : (
                  <FaRegEye size="20" />
                )}
              </span>
            </div>
          </div>
          <div className="mt-6">
            <button
              className="w-full h-14 bg-B88E2F text-neutral-50 rounded-md flex items-center justify-center transition-shadow duration-300 cursor-pointer hover:bg-black-lg hover:bg-black"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          </div>
          <div className="flex flex-col py-10">
            <div className="w-full h-14 bg-B88E2F rounded-md flex items-center justify-center transition-shadow duration-300 cursor-pointer hover:bg-black-lg hover:bg-black">
              <button
                className="flex items-center justify-center gap-4"
                type="button"
                onClick={handleGoogleSignin}
              >
                <FcGoogle size="20" />
                <span className="text-white">Log in with Google</span>
              </button>
            </div>
          </div>
          <div className="mt-10">
            <a href="#" className="text-red-500">
              Forgot Password?
            </a>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <p className="text-gray-600">Don't have an account?</p>
            <Link className="text-black underline" to="/signup">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
