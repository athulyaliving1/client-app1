import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {signup } from "../features/counter/counterSlice";
import { toast } from 'react-toastify';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    username: yup.string().required().min(3),
    email: yup
      .string()
      .email("That doesn't look like a valid email")
      .required("This field is required."),
    mobile: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10)
      .max(10)
      .required(),

    password: yup.string()
    .required("Password is required")
    .min(8, 'Password is too short - should be 8 chars minimum.'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
      tandc: yup.bool() // use bool instead of boolean
      .oneOf([true], "You must accept the terms and conditions")
  })
  .required();

function Register() {
  const navigate = useNavigate()
  const [username, setUsername] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


const submitHandler = async () => {
  try {
    dispatch(signup(username,mobile,email, password));
    
  } catch (error) {
    // Handle any error that occurs during the login process
    console.error('Register error:', error);
  }
};



  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://img.freepik.com/free-photo/closeup-support-hands_53876-30583.jpg?w=1380&t=st=1685340722~exp=1685341322~hmac=7b06309c70aa74dd4678dec8f523f584f39ba7159c7c6605a0e538a8e75bb662"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <span className="block text-white">
                <span className="sr-only">Home</span>
                <img
                  src="https://athulyahomecare.com/lp/images/care.png "
                  alt="senior"
                />
              </span>

              <h2 className="mt-6 btn-heading text-white">
                Welcome to Athulya Seniorcare
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>
          

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <span
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                  <img
                    src="https://athulyahomecare.com/lp/images/care.png"
                    alt="senior"
                  />
                </span>

                <h1 className="mt-2 btn-heading">
                  Welcome to Athulya Seniorcare
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>
            
              <form  onSubmit={handleSubmit(submitHandler)}  className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="username"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    UH ID
                  </label>

                  <input
                     value={username} onChange={(e) => setUsername(e.target.value)}
                    {...register("username")}
                    type="text"
                    id="username"
                    name="username"
                    className="  mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  <p className="text-pink-500 font-Poppins font-semibold">
                  {errors.username?.message}
                </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="mobilenumber"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Mobile Number
                  </label>

                  <input
                   value={mobile} onChange={(e) => setMobile(e.target.value)}
                        {...register("mobile")}
                    type="text"
                    id="mobilenumber"
                    name="mobile"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  <p className="text-pink-500 font-Poppins font-semibold">
                  {errors.mobile?.message}
                </p>
                </div>

                <div className="col-span-6">
                  <label
                    for="Email"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Email
                  </label>

                  <input
                  value={email} onChange={(e) => setEmail(e.target.value)}
                    {...register("email")}
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  <p className="text-pink-500 font-Poppins font-semibold">
                  {errors.email?.message}
                </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="Password"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>

                  <input
                  value={password} onChange={(e) => setPassword(e.target.value)}
                        {...register("password")}
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  <p className="text-pink-500 font-Poppins font-semibold">
                  {errors.password?.message}
                </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="PasswordConfirmation"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Password Confirmation
                  </label>

                  <input
                        {...register("passwordConfirmation")}
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  <p className="text-pink-500 font-Poppins font-semibold">
                  {errors.passwordConfirmation?.message}
                </p>
                </div>

                <div className="col-span-6">
                  <label for="MarketingAccept" className="flex gap-4">
                    <input
                    {...register("tandc")}
                      type="checkbox"
                      id="MarketingAccept"
                      name="tandc"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                       <p className="text-pink-500 font-Poppins font-semibold">
                  {errors.tandc?.message}
                </p>
                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <span className="text-gray-700 underline">
                      terms and conditions
                    </span>
                    and
                    <span className="text-gray-700 underline">
                      privacy policy
                    </span>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-[#176291] bg-[#176291] px-12 py-3 text-sm font-semibold text-white transition hover:bg-transparent hover:text-[#176291] focus:outline-none focus:ring active:text-sky-900">
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <span className="text-gray-700 underline">
                      <Link to="/login">Log in</Link>
                    </span>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Register;
