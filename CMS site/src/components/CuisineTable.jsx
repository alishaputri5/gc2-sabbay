import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import rupiahFormat from "../helpers/formatRupiah"


export default function CuisineTable({ cuisines, fetchCuisines, url }) {
  async function handleDelete(id) {
    try {
      const { data } = await axios.delete(
        `${url}/apis/restaurant-app/cuisines/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      fetchCuisines();
      Swal.fire({
        title: "Success",
        icon: "success",
        timer: 1000,
      });
    } catch (error) {
      console.log(error, "ini erorrrrrr");
      Swal.fire({
        title: error.response.data.statusCode,
        text: error.response.data.error,
        icon: "error",
        timer: 1000,
      });
    }
  }

  return (
    <>
      <div className="pl-72 pr-10">
        <div className="max-w-screen-xl mx-auto py-20">
          <div className="items-start justify-between md:flex">
            <div className="max-w-lg">
              <p className="text-3xl font-bold text-yellow-500">
                SAB<span className="text-green-700 border-white">BAY</span>
              </p>
              <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                Cuisine List
              </h3>
              <p className="text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className=" bg-stone-100 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">No</th>
                  <th className="py-3 px-6 text-center">Name</th>
                  <th className="py-3 px-6">Price</th>
                  <th className="py-3 px-6 text-center">Description</th>
                  <th className=" whitespace-nowrap py-3 px-6">Created By</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-s-600 bg-slate-100 w-[800px] divide-y">
                {cuisines?.map((cuisine, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">{i + 1}</td>

                    <td className="flex h-full justify-center align-middle items-center text-center gap-x-3 py-8 px-12 whitespace-nowrap">
                      <img
                        src={cuisine.imgUrl}
                        className="w-10 h-10 rounded-full" />
                      <div>
                        <span className="text-gray-700 text-sm font-medium  whitespace-nowrap">
                          {cuisine.name}
                        </span>
                      </div>
                    </td>

                    <td>
                      <span className="px-6 py-4 whitespace-nowrap">

                        {rupiahFormat(cuisine.price)}
                      </span>
                    </td>

                    <td className="px-3 py-4 w-2/3">
                      <div className="max-h-48 overflow-y-auto">
                        <p className="w-full">{cuisine.description}</p>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {cuisine.User?.username}
                    </td>

                    <td className="text-right px-6 whitespace-nowrap">
                      <Link
                        to={`/upload/${cuisine.id}`}

                        className="m-1 py-2 px-3 font-medium text-white bg-blue-600 duration-150 rounded-lg"
                      >
                        Upload
                      </Link>
                      <Link
                        to={`/edit/${cuisine.id}`}
                        className="m-1 py-2 px-3 font-medium text-white bg-yellow-500 duration-150 rounded-lg"
                      >
                        Edit
                      </Link>
                      <button
                        className="m-1 py-2 leading-none px-3 font-medium text-white bg-red-600 duration-150 rounded-lg"
                        onClick={(e) => handleDelete(cuisine.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
