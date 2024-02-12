import gambar2 from "../assets/veggie-1-1024x768.png";
import Cuisines from "./Cuisines";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        className="flex h-[600px] gap-10 py-40 bg-green-700"
        data-aos="slide-left"
        data-aos-once="false"
      >
        <div className="flex flex-col px-60 py-14 z-50">
          <p className="text-yellow-500 text-7xl">OUR</p>
          <p className="text-7xl text-white">MENU</p>
          <Link
            to="/cuisines"
            className="mt-5 gap-5 text-3xl text-center text-white p-3 bg-yellow-500 duration-150 rounded-2xl"
          >
            Click here!
          </Link>
        </div>
        <div className="flex place-items-end h-[400px]">
          <img className="" src={gambar2} />
        </div>
      </div>
      <Cuisines />
    </>
  );
}
