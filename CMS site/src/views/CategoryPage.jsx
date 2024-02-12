import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryList({ url }) {
  const [categories, setCategories] = useState([]);

  async function fetchCategory() {
    try {
      const { data } = await axios.get(
        `${url}/apis/restaurant-app/categories`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      setCategories(data.data);
    } catch (error) {
      console.log(error);
      localStorage.clear();
      navigate("/login");
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <div className="flex flex-col py-20 pl-72">
        <div className="">
          <p className="text-3xl font-bold text-yellow-500">
            SAB<span className="text-green-700 border-white">BAY</span>
          </p>
          <p className="text-3xl">Category List</p>
        </div>
        <div className="flex justify-end mr-10">
          <Link
            to={`/addCategory`}
            className=" m-1 py-2 px-3 font-medium text-white bg-green-700 hover:text-yellow-400 duration-150 rounded-lg"
          >
            Add Category
          </Link>
        </div>
        <div className="mt-8 w-full pr-12 text-gray-900">
          <div className="flex border-b-2 border-green-700 items-center pb-1">
            <p className="mb-1 px-4 text-green-700 font-semibold">No</p>
            <p className="mb-1 px-6 text-green-700 font-semibold">Name</p>
          </div>
        </div>
        {categories?.map((category, i) => {
          return (
            <div key={i} className="mt-8 w-full pr-12 text-gray-900">
              <div className="flex border-b-2 border-gray-400 items-center pb-1">
                <p className="px-6 py-2 whitespace-nowrap">{i + 1}.</p>
                <p className="mb-1 text-gray-700">{category.name}</p>
              </div>
              {/* <div class="flex flex-col py-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Home address
            </dt>
            
          </div>
          <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Phone number
            </dt>
            <dd class="text-lg font-semibold">+00 123 456 789 / +12 345 678</dd>
          </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
}
