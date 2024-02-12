import axios from "axios";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function AddCategoryPage({ url }) {
  const navigate = useNavigate()

  async function handleAddCategory(e, name) {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        `${url}/apis/restaurant-app/categories`,
        { name },
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
        navigate("/category")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="pl-72 py-20">
        <p className="text-3xl font-bold text-yellow-500">
          SAB<span className="text-green-700 border-white">BAY</span>
        </p>
        <p className="text-3xl">Create New Category</p>

        <form onSubmit={(e) => handleAddCategory(e, e.target[0].value)} className="mt-10">
          <div className="relative z-0 w-full mb-5 group pr-10">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-noned focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              className="peer-focus:font-medium absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Category
            </label>
          </div>

          <Button nameProp="Submit" />
        </form>
      </div>
    </>
  );
}
