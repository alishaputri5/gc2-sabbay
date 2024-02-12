import { useState } from "react";
import Card from "../components/Card";
import { useEffect } from "react";
import axios from "axios";
import { url } from "../constants";
import { Icon } from "@iconify/react";
import gambar1 from "../assets/2chicken-slice-1024x683.png";
import Pagination from "../components/Pagination";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cuisines() {
  const [cuisines, setCuisines] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState([]);
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState("ASC");
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchCuisine() {
    try {
      console.log({ url });
      const { data } = await axios.get(
        `${url}/apis/pub/restaurant-app/cuisines?q=${search}&i=${filter}&limit=8&page=${currentPage}&sort=${sort}`
      );
      // console.log(data, "ini dataaaa");
      setCuisines(data.data.query);
      setPagination(data.data.pagination);
    } catch (error) {
      console.log(error, "<<<");
    }
  }

  async function fetchCategory() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/restaurant-app/categories`
      );
      setCategories(data.data);
    } catch (error) {
      Swal.fire({
        title: "error",
        icon: "error",
      });
    }
  }
  useEffect(() => {
    fetchCuisine();
  }, [search, sort, filter, currentPage]);

  useEffect(() => {
    fetchCategory();
    AOS.init();
    // AOS.refresh();
  }, []);

  function searchOnChange(event) {
    setSearch(event.target.value);
  }
  function sortOnChange(event) {
    setSort(event.target.value);
  }
  function filterOnChange(event) {
    setFilter(event.target.value);
  }
  function nextPage(event) {
    if (currentPage < pagination?.totalPage) {
      setCurrentPage(currentPage + 1);
    }
    console.log(currentPage);
  }
  function previousPage(event) {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    console.log(currentPage);
  }
  return (
    <>
      <div
        className="flex flex-col h-full gap-10 py-16 bg-yellow-500 relative z-0"
        data-aos="slide-right"
        data-aos-delay="200"
      >
        <img
          src={gambar1}
          className="w-[70%] h-[600px] top-[-160px] left-[200px] absolute z-0"
          data-aos="slide-right"
          data-aos-delay="700"
        />
        <p
          className="absolute tracking-wider items-center text-center text-[70px] font-bold text-white p-64 -top-10 left-72 z-10 "
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          data-aos="slide-right"
          data-aos-delay="1000"
        >
          ALL MENU
        </p>

        <div className="flex justify-center pt-64 mt-10 z-50">
          <div className="text-center items-center relative text-green-900 w-[400px]">
            <input
              type="search"
              name="search"
              placeholder="Search"
              onChange={searchOnChange}
              className="bg-yellow-500 outline-double outline-white w-[400px] h-10 px-5 pr-10 rounded-full text-sm focus:outline-white placeholder-green-700"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <Icon
                icon="bitcoin-icons:search-filled"
                width={24}
                height={24}
                className="font-bold"
              />
            </button>
          </div>

          <div className="flex justify-end">
            <select
              name="sort"
              className="bg-transparent text-green-700 px-2 py-2 outline-none z-50"
              onChange={sortOnChange}
            >
              <option value="ASC">Sort by</option>
              <option value="ASC">ASC</option>
              <option value="DESC">DESC</option>
            </select>
          </div>

          <div>
            <select
              className="bg-transparent text-green-700 px-2 py-2 outline-none z-50"
              onChange={filterOnChange}
              name="filter"
            >
              <option selected hidden value="">Filter by category</option>
              <option value="">All</option>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>

        </div>
        <Card cuisines={cuisines} />
        <div className="border-t-2 border-green-900">
          <Pagination
            nextPage={nextPage}
            previousPage={previousPage}
            currentPage={currentPage}
            pagination={pagination}
          />
        </div>
      </div>
    </>
  );
}
