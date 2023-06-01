import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../features/counter/counterSlice";

const schema = yup
  .object({
    username: yup.string().required("Mobile Number/ UHID is required").min(3),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum."),
  })
  .required();

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const {  userInfo } = userLogin;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = async () => {
    dispatch(login(username, password));
  };



  useEffect(() => {
    if (userInfo) {
      // Redirect to the desired route after successful login
      navigate('/dashboard'); // Replace '/dashboard' with your desired route
    }
  }, [userInfo, navigate]);

  return (
    <div>
      <div className="">
        <div
          className="
		bg-[url('https://img.freepik.com/free-photo/closeup-support-hands_53876-20502.jpg?w=1380&t=st=1685170025~exp=1685170625~hmac=9bf14d4e1a931eeecf8a61c4b065770e66c5ff18b49dda86dff8f98d22d03330')]  bg-no-repeat bg-cover bg-center h-screen w-screen relative"
        >
          <div className="absolute bg-gray-800 opacity-40 inset-0 z-0"></div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <div className="lg:w-1/2">
                  <img
                    className=""
                    src="https://athulyahomecare.com/lp/images/care.png"
                    alt=""
                  />

                  <h1 className="mt-4 text-white font-Poppins font-semibold md:text-lg">
                    Welcome back
                  </h1>

                  <h1 className="mt-4  text-white capitalize btn-heading whitespace-nowrap">
                    login to your account
                  </h1>
                </div>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  {/* <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl  text-start"> */}
                  <h3 className="btn-heading text-center opacity-90">
                    Sign up with your account
                  </h3>
                  <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="username"
                        className="inline-block mb-1 font-bold "
                      >
                        Mobile / UH ID
                      </label>
                      <input
                        {...register("username")}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="9876543210 / ATH-CH ARM-00001"
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="username"
                        name="username"
                      />
                      <p className="text-pink-500 font-Poppins font-semibold">
                        {errors.username?.message}
                      </p>
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-bold"
                      >
                        Password
                      </label>
                      <input
                        {...register("password")}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="***********"
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                      />
                      <p className="text-pink-500 font-Poppins font-semibold">
                        {errors.password?.message}
                      </p>
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md border-[#176291] bg-[#176291] focus:shadow-outline focus:outline-none"
                      >
                        Submit
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      Don't have an account?
                      <Link to="/register">
                        <button className="underline-offset-1 underline">
                          Sign up
                        </button>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
