import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { Login } from "../redux/features/userSlice";

const dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = useSelector((state) => ({ ...state.user }));
  const [error, setError] = useState("");

  console.log();
  useEffect(() => {
    if (user?.data?.token) {
      setError("");
      rsouter.push("/dashboard");
    } else {
      setError("Invalid credentials.");
    }
  }, [dispatch, user]);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(Login(formData));
  };

  const handleOnchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center min-h-screen">
        <form
          type="submit"
          className="space-y-6 bg-gray-100 p-24 mx-12 rounded-lg shadow-2xl"
        >
          <div className="text-red-500">{error}</div>
          <div>
            <label className=" mb-2 text-sm font-medium text-gray-900 ">
              Name
            </label>
            <input
              onChange={handleOnchange}
              type="text"
              name="name"
              className=" border mb-6  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="first name"
              required
            />
            <label className="mb-2 text-sm font-medium text-gray-900 ">
              Password
            </label>
            <input
              onChange={handleOnchange}
              type="password"
              name="password"
              className=" border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div></div>
          <div></div>

          <button
            onClick={handleFormSubmit}
            className=" w-full text-white disabled:opacity-40  bg-theme-primary enabled:hover:bg-indigo-600  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default dashboard;
