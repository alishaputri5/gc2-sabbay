import { Icon } from "@iconify/react";
import Button from "./Button";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function CuisineForm({
  nameProp,
  nameTitle,
  cuisine,
  handleSubmit,
  url,
}) {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  // const [form,setForm] = useState({
  //   name: "",
  //   description: "",
  //   imgUrl: "",
  //   price: 0,
  //   categoryId: 0
  // })

  // const [cuisine, setCuisine] = useState("name", "description", "imgUrl", "price", "categoryId")
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
      Swal.fire({
        title: error.response.data.statusCode,
        text: error.response.data.message,
        icon: "error",
      });
    }
  }

  useEffect(() => {
    fetchCategory();
    if (cuisine) {
      setName(cuisine.name);
      setDescription(cuisine.description);
      setImgUrl(cuisine.imgUrl);
      setPrice(cuisine.price);
      setCategoryId(cuisine.categoryId);
    }
  }, [cuisine]);

  return (
    <>
      <div className="pl-72 py-20">
        <p className="text-3xl font-bold text-yellow-500">
          SAB<span className="text-green-700 border-white">BAY</span>
        </p>
        <p className="text-3xl">{nameTitle}</p>
        <form
          onSubmit={(e) =>
            handleSubmit(e, name, description, imgUrl, price, categoryId)
          }
          className="py-10 pr-10"
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-noned focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="peer-focus:font-medium absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-noned focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="peer-focus:font-medium absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Description
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-noned focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <label className="peer-focus:font-medium absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Image Url
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-noned focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label className="peer-focus:font-medium absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Price
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="underline_select"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option disabled hidden selected>
                  Choose category
                </option>
                {categories?.map((category, idx) => {
                  console.log(category);
                  return cuisine?.categoryId === category.id ? (
                    <option key={idx} selected value={category.id}>
                      {category.name}
                    </option>
                  ) : (
                    <option key={idx} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>

              <label
                
                className="peer-focus:font-medium absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Category
              </label>
            </div>
          </div>

          <Button nameProp={nameProp} />
        </form>
      </div>
    </>
  );
}
