import { useEffect, useState } from "react";
import CuisineForm from "../components/CuisineForm";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditCuisinePage({ url }) {
  const [cuisine, setCuisine] = useState([]);
  const { id } = useParams(); /// dapetin id jg bs dengan const id = event.target.getAttribute('data-id'), tp di params menggunakan event(punya js,target, getAttributes jg)
  const navigate = useNavigate()

  async function fetchCuisine() {
    try {
      const { data } = await axios.get(
        `${url}/apis/restaurant-app/cuisines/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          }
        }
      );
      setCuisine(data.data);
    } catch (error) {
      Swal.fire ({
        title: error.response.data.statusCode,
        text: error.response.data.message,
        icon: "error"
      })
  }
}

  useEffect(() => {
    fetchCuisine();
  }, []);

  async function handleSubmit(e, name, description, imgUrl, price, categoryId)  {
    e.preventDefault()
    try {
      const body = { name, description, imgUrl, price: +price, categoryId: +categoryId };
      await axios.put(
        `${url}/apis/restaurant-app/cuisines/${id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          }
        }
      );

      Swal.fire ({
        title: "Success",
        text: "Success update cuisine",
        icon: "success"
      })
      navigate("/")
    } catch (error) {
      console.log(error);
      Swal.fire ({
        title: "error",
        icon: "error"
      })
    }
  }
  
  return (
    <>
      <CuisineForm nameTitle="Edit Your Cuisine" nameProp="Save" cuisine={cuisine} handleSubmit={handleSubmit} url={url} />
    </>
  );
}
