import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function UploadImage({ url }) {
  const [image, setImage] = useState({});
  const [cuisine, setCuisine] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchCuisine() {
    try {
      const { data } = await axios.get(
        `${url}/apis/restaurant-app/cuisines/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      setCuisine(data.data);
    } catch (error) {
      Swal.fire({
        title: "error",
        icon: "error",
      });
    }
  }
  useEffect(() => {
    fetchCuisine();
  }, []);

  async function handleUpload(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append(`file`, image);
      console.log(formData);
      console.log(image, "ini image di handle");
      await axios.patch(
        `${url}/apis/restaurant-app/cuisines/${id}`,
        formData,
        {
          headers: {
            Authorization: `Baerer ${localStorage.access_token}`,
          },
        }
      );
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "error",
        icon: "error",
      });
    }
  }
  return (
    <>
      <div className="pl-72 py-20">
        <p className="text-3xl font-bold text-yellow-500">
          SAB<span className="text-green-700 border-white">BAY</span>
        </p>
        <p className="text-3xl">Upload image</p>
        <div className="flex flex-col gap-5">
          <div className="flex justify-center items-center pt-10 px-20">
            <img src={cuisine.imgUrl} className="w-[20vw] h-[40vh]" />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-center text-2xl font-bold">{cuisine.name}</h1>
          </div>

          <form
            onSubmit={(e) => handleUpload(e)}
            className="max-w-lg mx-auto flex flex-col justify-center items-center"
          >
            <label className="block mb-2 text-sm font-medium text-green-700">
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border placeholder-teal-600 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              type="file"
            />
            <button
              className=" bg-green-700 text-white px-2 py-1 rounded-md my-5 w-[30%]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
