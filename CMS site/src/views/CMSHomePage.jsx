import { useEffect, useState } from "react";
import CuisineTable from "../components/CuisineTable";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function CMSHomePage({url}) {
  const [cuisines, setCuisines] = useState([])
  const navigate = useNavigate()
  
  async function fetchCuisines() {
    try {
      const {data} = await axios.get(`${url}/apis/restaurant-app/cuisines`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`
        }
      })
      setCuisines(data.data)
    } catch (error) {
      console.log(error);
      localStorage.clear()
      navigate('/login')
    }
  }

  useEffect(() => {
    fetchCuisines()
  }, [])

  return(
    <>
    <div>
    <CuisineTable cuisines={cuisines} fetchCuisines={fetchCuisines} url={url} />

    </div>
    </>
  )
}