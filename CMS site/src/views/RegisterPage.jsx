import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function RegisterPage({ url }) {
  const navigate = useNavigate();

  async function handleAddUser(
    e,
    username,
    email,
    password,
    phoneNumber,
    address
  ) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${url}/apis/add-user`,
        { username, email, password, phoneNumber, address },
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      Swal.fire({
        title: "Success",
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "error",
        icon: "error",
      });
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-10 py-20">
        <div className="flex flex-col pl-64 justify-center">
          <p className="text-3xl font-bold text-yellow-500">
            SAB<span className="text-green-700 border-white">BAY</span>
          </p>
          <p className="text-3xl">Register new staff!</p>
        </div>

        <div className="mt-10 pl-64">
          <form
            onSubmit={(e) =>
              handleAddUser(
                e,
                e.target[0].value,
                e.target[1].value,
                e.target[2].value,
                e.target[3].value,
                e.target[4].value
              )
            }
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  type="text"
                  required
                  className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-green-700 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-green-700 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phineNumber"
                  type="text"
                  required
                  className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-green-700 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  type="text"
                  required
                  className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-green-700 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-green-700 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-3xl bg-green-700 px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-500 shadow-sm hover:text-green-700 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
