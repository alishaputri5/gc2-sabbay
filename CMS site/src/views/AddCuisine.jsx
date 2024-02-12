import axios from "axios";
import CuisineForm from "../components/CuisineForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function AddCuisine({url}){
const navigate = useNavigate()

  async function handleSubmit(e, name, description, imgUrl, price, categoryId) {
    e.preventDefault()
    try {
      const body = { name, description, imgUrl, stock: 0, price: +price, categoryId: +categoryId };
      await axios.post(
        `${url}/apis/restaurant-app/cuisines`,
        body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          }
        }
      );
    Swal.fire ({
        title: "Success",
        text: "Success create cuisine",
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
  return(
    <>
    <CuisineForm nameProp="Submit" nameTitle="Create New Cuisine" handleSubmit={handleSubmit} url={url}/>
    
    </>
  )
}