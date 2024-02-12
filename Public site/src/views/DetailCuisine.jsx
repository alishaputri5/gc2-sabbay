import { useState } from "react";
import { url } from "../constants";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import gambar3 from "../assets/veggie-detail.jpeg";
import rupiahFormat from "../helpers/formatRupiahPub";

export default function DetailCuisine() {
  const [cuisine, setCuisine] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchCuisineById() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/restaurant-app/cuisines/${id}`
      );
      setCuisine(data.data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "error",
        icon: "error",
      });
      navigate("/");
    }
  }
  useEffect(() => {
    fetchCuisineById();
  }, []);

  return (
    <>
      <div className="relative">
        <img src={gambar3} alt="" className="w-full" />
        <p className="text-7xl font-semibold text-green-500 absolute top-40 right-28">
          OUR MENU
        </p>
        <div className="flex p-20 h-[500px]">
          <div className="flex px-20">
            <img src={cuisine.imgUrl} alt="" className="w-[25vw] h-[40vh]" />
          </div>
          <div>
            <div className="flex ">
              <h1 className="text-center text-4xl font-bold ">
                {cuisine.name}
              </h1>
            </div>
            <div>
              <p className="text-green-700 text-2xl pt-5">{rupiahFormat(cuisine.price)}</p>
              <p className="pt-40">
                Description:<p>{cuisine.description}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
