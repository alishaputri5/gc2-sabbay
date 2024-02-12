import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

export default function LoginPage({ url }) {
  const [loginData, setlLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      let { data } = await axios.post(`${url}/apis/login`, loginData);

      localStorage.setItem("access_token", data.data.access_token);
     

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-40 lg:px-8">
        <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="text-center text-3xl font-bold text-yellow-500">
            SAB<span className="text-green-700 border-white">BAY</span>
          </p>
          <p className="text-center text-xl text-gray-700">
            Sign in to your account
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleLogin}
            className="space-y-6"
            action="#"
            method="POST"
          >
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
                  onChange={(e) => {
                    setlLoginData({ ...loginData, ["email"]: e.target.value });
                  }}
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
                  onChange={(e) => {
                    setlLoginData({
                      ...loginData,
                      ["password"]: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-3xl bg-green-700 px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-500 shadow-sm hover:text-green-700 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
